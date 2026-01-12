# Quick Website Deployment Guide

## Get Your Shagun Farms Website Live in 15 Minutes

---

## Option 1: Netlify (Fastest - Recommended ⭐)

### Steps:

1. **Prepare your files:**
   - Make sure all HTML, CSS, JS, IMG files are in one folder
   - Rename your main page `index.html` (if not already)

2. **Go to Netlify:**
   - Visit https://netlify.com
   - Click "Sign up" → Use GitHub/Google account

3. **Deploy:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire project folder
   - Website is live in 30 seconds!

4. **Get your URL:**
   - Netlify gives you a free domain: `xyz-123.netlify.app`

5. **Connect GoDaddy Domain:**
   - In Netlify: Site Settings → Domain Management
   - Add your custom domain (your GoDaddy domain)
   - Update DNS records in GoDaddy pointing to Netlify

---

## Option 2: Vercel (Also Very Fast)

### Steps:

1. **Upload code to GitHub:**
   - Create GitHub account if needed
   - Create new repository
   - Upload all files

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import from GitHub
   - Click Deploy
   - Done!

3. **Connect Domain:**
   - Vercel → Settings → Domains
   - Add your GoDaddy domain
   - Update DNS in GoDaddy

---

## Option 3: GitHub Pages (Free Forever)

### Steps:

1. **Create GitHub account**
2. **Create new repository** named `shagunfarms`
3. **Upload all files**
4. **Go to Settings → Pages**
5. **Enable GitHub Pages**
6. **Website goes live at:** `yourusername.github.io/shagunfarms`
7. **Connect Domain:**
   - Add DNS records in GoDaddy pointing to GitHub Pages

---

## GoDaddy Domain Setup (All Options)

### After deploying to Netlify/Vercel/GitHub:

1. **Log into GoDaddy.com** with your credentials
2. **Go to: My Products → Domains**
3. **Click your domain name**
4. **Click "Manage DNS"** (or Nameservers)

### For Netlify:
- Nameserver 1: `dns1.p05.nsone.net.`
- Nameserver 2: `dns2.p05.nsone.net.`
- Nameserver 3: `dns3.p05.nsone.net.`
- Nameserver 4: `dns4.p05.nsone.net.`

### For Vercel:
Similar - Vercel provides nameservers to add

### For GitHub Pages:
A Records pointing to:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

---

## DNS Propagation

⏱️ **Takes 24-48 hours** for DNS to fully propagate
- Website may work immediately or take time
- Wait 24 hours before assuming there's an issue

---

## Quick Checklist Before Going Live

- [ ] All forms have Google Form IDs replaced (no XXX placeholders)
- [ ] Images load correctly
- [ ] Navigation links work
- [ ] Responsive design looks good on mobile
- [ ] Test contact form submission
- [ ] Test booking form submission
- [ ] Phone number links work (`tel:` links)
- [ ] WhatsApp links work
- [ ] Social media links are correct

---

## Testing Your Website

Before deploying:

1. **Open in browser locally:**
   ```
   Double-click index.html or drag to browser
   ```

2. **Test on mobile:**
   - Use DevTools (F12) → Responsive Design Mode
   - Or test on actual phone

3. **Test forms:**
   - Fill booking form → Check Google Sheets
   - Fill contact form → Check Google Sheets

---

## If Something Goes Wrong

### Forms not appearing:
- Check iframe URLs in booking.html and contact.html
- Ensure no "XXXX" placeholders remain
- Clear browser cache (Ctrl+Shift+Del)

### Images not loading:
- Check image file paths are correct
- Ensure `img/` folder is uploaded
- Use relative paths like `img/logo.png`

### Domain not pointing:
- Wait 24-48 hours for DNS propagation
- Check nameservers in GoDaddy are correct
- Use https://dnschecker.org to verify

---

## Support

- **Netlify Support:** https://netlify.com/support
- **Vercel Support:** https://vercel.com/support
- **GitHub Pages:** https://pages.github.com

---

**You've got this! 🎉 Your website will be live soon!**
