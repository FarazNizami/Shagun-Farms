const esbuild = require('esbuild');
const path = require('path');

const isWatch = process.argv.includes('--watch');

esbuild.build({
  entryPoints: [path.resolve(__dirname, '../js/main.js')],
  bundle: true,
  minify: true,
  sourcemap: false,
  outfile: path.resolve(__dirname, '../dist/app.js'),
  loader: { '.png': 'file', '.jpg': 'file', '.svg': 'file', '.webp': 'file' },
  metafile: false,
  define: { 'process.env.NODE_ENV': '"production"' }
}).then(() => {
  console.log('JS build succeeded');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});

// Simple CSS copy/minify step: just copy for now (users can integrate PostCSS later)
const fs = require('fs');
const cssSrc = path.resolve(__dirname, '../css/style.css');
const cssOut = path.resolve(__dirname, '../dist/app.css');

const css = fs.readFileSync(cssSrc, 'utf8');
// basic minify: remove comments and whitespace
const cssMin = css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n/g, '').replace(/\s{2,}/g, ' ');
fs.mkdirSync(path.resolve(__dirname, '../dist'), { recursive: true });
fs.writeFileSync(cssOut, cssMin, 'utf8');
console.log('CSS written to dist/app.css');

if (isWatch) {
  // watch JS only
  esbuild.context({
    entryPoints: [path.resolve(__dirname, '../js/main.js')],
    bundle: true,
    minify: true,
    outfile: path.resolve(__dirname, '../dist/app.js')
  }).then(ctx => ctx.watch()).catch(e => console.error(e));
}
