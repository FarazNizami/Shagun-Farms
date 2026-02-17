const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const sharp = safeRequire('sharp');
const glob = safeRequire('glob');
const { PurgeCSS } = safeRequire('purgecss') || {};

function safeRequire(name) {
  try { return require(name); } catch (e) { return null; }
}

const isWatch = process.argv.includes('--watch');
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');
fs.mkdirSync(distDir, { recursive: true });

// 1) Bundle JS with esbuild
(async () => {
  try {
    await esbuild.build({
      entryPoints: [path.resolve(projectRoot, 'js', 'main.js')],
      bundle: true,
      minify: true,
      sourcemap: false,
      outfile: path.resolve(distDir, 'app.js'),
      define: { 'process.env.NODE_ENV': '"production"' }
    });
    console.log('JS bundled -> dist/app.js');
  } catch (err) {
    console.error('esbuild error:', err);
  }

  // 2) Minify CSS (and run PurgeCSS if available)
  try {
    const cssSrc = path.resolve(projectRoot, 'css', 'style.css');
    let css = fs.readFileSync(cssSrc, 'utf8');

    if (PurgeCSS) {
      try {
        const purgeResult = await new PurgeCSS().purge({
          content: [path.join(projectRoot, '**', '*.html'), path.join(projectRoot, 'js', '**', '*.js')],
          css: [cssSrc]
        });
        if (purgeResult && purgeResult[0] && purgeResult[0].css) {
          css = purgeResult[0].css;
          console.log('PurgeCSS: removed unused CSS');
        }
      } catch (e) {
        console.warn('PurgeCSS run failed:', e.message || e);
      }
    }

    const cssMin = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n/g, '').replace(/\s{2,}/g, ' ');
    fs.writeFileSync(path.resolve(distDir, 'app.css'), cssMin, 'utf8');
    console.log('CSS written -> dist/app.css');
  } catch (err) {
    console.error('CSS write error:', err);
  }

  // 3) Convert images to WebP if `sharp` is available
  if (!sharp || !glob) {
    console.warn('Skipping image conversion: `sharp` or `glob` not installed. Run `npm install` to enable image conversion.');
    return;
  }

  const images = glob.sync(path.join(projectRoot, 'img', '**', '*.+(jpg|jpeg|png)'));
  const outImagesDir = path.join(distDir, 'images');
  fs.mkdirSync(outImagesDir, { recursive: true });
  const sizes = [400, 800, 1200, 1600];
  const manifest = {};

  await Promise.all(images.map(async (imgPath) => {
    const rel = path.relative(path.join(projectRoot, 'img'), imgPath);
    const name = path.basename(rel, path.extname(rel));
    const dir = path.dirname(rel);
    manifest[rel] = [];

    await Promise.all(sizes.map(async (w) => {
      const outDir = path.join(outImagesDir, dir);
      fs.mkdirSync(outDir, { recursive: true });
      const outName = `${name}-${w}.webp`;
      const outPath = path.join(outDir, outName);
      try {
        await sharp(imgPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
        manifest[rel].push(path.relative(distDir, outPath).replace(/\\/g, '/'));
      } catch (e) {
        console.warn('sharp conversion failed for', imgPath, e.message || e);
      }
    }));
  }));

  fs.writeFileSync(path.join(distDir, 'images-manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Image conversions complete; manifest -> dist/images-manifest.json');

})();

if (isWatch) {
  esbuild.context({
    entryPoints: [path.resolve(projectRoot, 'js', 'main.js')],
    bundle: true,
    minify: true,
    outfile: path.resolve(distDir, 'app.js')
  }).then(ctx => ctx.watch()).catch(e => console.error(e));
}
