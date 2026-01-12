# Shagun Farms Website - Launch Checklist

## 🎯 Mission: Get Your Website Live in 1 Hour

Use this checklist to track your progress!

---

## Phase 1: Prepare (5 minutes)

### Read Documentation
- [ ] Open `QUICK_START.md` - read overview
- [ ] Understand the 3-step process
- [ ] Know what you need to do

---

## Phase 2: Create Google Forms (15 minutes)

### Create Booking Form
- [ ] Go to https://forms.google.com
- [ ] Create new form
- [ ] Title: "Shagun Farms - Booking Inquiry"
- [ ] Add field: Full Name (Short Answer) - Required
- [ ] Add field: Email Address (Email) - Required
- [ ] Add field: Phone Number (Short Answer) - Required
- [ ] Add field: Event Date (Date) - Required
- [ ] Add field: Event Type (Multiple Choice)
  - [ ] Wedding
  - [ ] Reception
  - [ ] Engagement
  - [ ] Birthday
  - [ ] Corporate Event
  - [ ] Other
- [ ] Add field: Number of Guests (Multiple Choice)
  - [ ] 100-300
  - [ ] 300-600
  - [ ] 600-1000
  - [ ] 1000+
- [ ] Add field: Venue Type (Multiple Choice)
  - [ ] Grand Ballroom
  - [ ] Poolside Lawn
  - [ ] Banquet Hall
  - [ ] Not Sure - Need Suggestions
- [ ] Add field: Room Accommodations (Multiple Choice)
  - [ ] Yes
  - [ ] No
  - [ ] Maybe
- [ ] Add field: Special Requirements (Paragraph Text)
- [ ] **Copy your Booking Form ID** and save it somewhere
  - Format: `1FAIpQLSe...` (long alphanumeric string)

### Create Contact Form
- [ ] Create another new form
- [ ] Title: "Shagun Farms - Contact Message"
- [ ] Add field: Your Name (Short Answer) - Required
- [ ] Add field: Email Address (Email) - Required
- [ ] Add field: Phone Number (Short Answer) - Required
- [ ] Add field: Event Type (Multiple Choice)
  - [ ] Wedding
  - [ ] Reception
  - [ ] Corporate
  - [ ] Personal Event
  - [ ] General Inquiry
  - [ ] Other
- [ ] Add field: Subject (Short Answer) - Required
- [ ] Add field: Message (Paragraph Text) - Required
- [ ] **Copy your Contact Form ID** and save it

---

## Phase 3: Update Your Website (5 minutes)

### Update booking.html
- [ ] Open `booking.html` with a text editor (Notepad, VS Code, etc)
- [ ] Use Ctrl+F to search for: `1FAIpQLSfXXXXXXX`
- [ ] Find the line with `<iframe src=`
- [ ] Replace the `XXXX` part with your **Booking Form ID**
- [ ] Save the file

### Update contact.html
- [ ] Open `contact.html` with a text editor
- [ ] Use Ctrl+F to search for: `1FAIpQLSfXXXXXXX`
- [ ] Find the line with `<iframe src=`
- [ ] Replace the `XXXX` part with your **Contact Form ID**
- [ ] Save the file

### Test Locally
- [ ] Open `booking.html` in your browser (double-click it)
- [ ] Scroll down - should see Google Form embedded
- [ ] Open `contact.html` in your browser
- [ ] Scroll down - should see Google Form embedded
- [ ] Fill out booking form with test data
- [ ] Submit
- [ ] Go to your Google Forms "Responses" tab
- [ ] **Verify test submission appears** ✅

---

## Phase 4: Deploy Website (5 minutes)

### Choose Hosting Platform (Pick ONE)

#### Option A: Netlify (Easiest ⭐)
- [ ] Go to https://netlify.com
- [ ] Sign up (use Google or GitHub)
- [ ] Click "Add new site"
- [ ] Choose "Deploy manually"
- [ ] Drag and drop your entire `d:\Projects\Shagun Farms\` folder
- [ ] Wait for deployment (should see ✓ checkmarks)
- [ ] **Copy your site URL** (looks like: `xyz-123.netlify.app`)

#### Option B: Vercel
- [ ] Go to https://vercel.com
- [ ] Upload code to GitHub first (if not already there)
- [ ] Sign in with GitHub
- [ ] Click "New Project"
- [ ] Select your repository
- [ ] Click "Deploy"
- [ ] Wait for deployment
- [ ] **Copy your site URL**

#### Option C: GitHub Pages (Free)
- [ ] Go to https://github.com
- [ ] Create repository named `shagunfarms`
- [ ] Upload all your files
- [ ] Go to Settings → Pages
- [ ] Enable Pages
- [ ] **Copy your site URL** (yourname.github.io/shagunfarms)

### Test Your Deployed Website
- [ ] Open your new site URL in browser
- [ ] Scroll through pages - everything should look the same
- [ ] Test both forms appear correctly
- [ ] Fill test form on contact page
- [ ] Submit
- [ ] Check Google Forms Responses tab - should see submission ✅

---

## Phase 5: Connect Your GoDaddy Domain (2 minutes)

### Update Nameservers

#### If Using Netlify:
- [ ] Netlify account → Site Settings → Domain Management
- [ ] Click "Add custom domain"
- [ ] Enter your domain (e.g., shagunfarms.com)
- [ ] Netlify gives you nameservers
- [ ] Copy the nameserver addresses

#### Update in GoDaddy:
- [ ] Log into https://godaddy.com
- [ ] Go to My Products → Domains
- [ ] Click your domain name
- [ ] Click "Manage DNS" or "Nameservers"
- [ ] Replace with nameservers from Netlify/Vercel
- [ ] Save

### Wait for DNS Propagation
- [ ] ⏰ Wait 24-48 hours
- [ ] Domain propagation is automatic
- [ ] You can check progress at https://dnschecker.org
- [ ] Once complete, your domain points to your site

---

## Phase 6: Final Verification (After 24 hours)

### Test Your Domain
- [ ] Open your domain in browser (e.g., shagunfarms.com)
- [ ] Should load your website
- [ ] Check all pages load
- [ ] Click navigation links
- [ ] Test both forms
- [ ] Check images load

### Create Booking
- [ ] Fill booking form on your domain
- [ ] Submit
- [ ] Check Google Sheets
- [ ] Should see submission ✅

---

## 🎉 Congratulations! You're Live!

- [ ] Website accessible at your domain
- [ ] Forms collecting inquiries
- [ ] You can manage bookings from Google Sheets
- [ ] Ready to receive customers!

---

## What to Do Next

### Daily Tasks:
- [ ] Check Google Sheets for new submissions
- [ ] Call customers to confirm bookings
- [ ] Follow up with quotes
- [ ] Update availability

### Optional (After Launch):
- [ ] Set up email notifications for form submissions (IFTTT/Zapier)
- [ ] Create booking confirmation emails
- [ ] Add payment processing (Razorpay)
- [ ] Track analytics
- [ ] Monitor form submissions

---

## Troubleshooting

### Forms not showing on website?
- [ ] Check you replaced form IDs (no XXXX remaining)
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Try incognito/private browser
- [ ] Check iframe URLs are complete

### Forms showing but not submitting?
- [ ] Check your Google Forms are "accepting responses"
- [ ] Try on different browser
- [ ] Check internet connection

### Domain not connecting?
- [ ] Wait longer (up to 48 hours)
- [ ] Verify DNS settings in GoDaddy are correct
- [ ] Use https://dnschecker.org to check
- [ ] Restart your browser/router

### Website looks broken?
- [ ] Check all image paths in HTML
- [ ] Verify img/ folder is uploaded
- [ ] Check CSS loads (might see unstyled page)
- [ ] Try different browser

---

## Contact Info for Support

**If You Need Help:**

### Google Forms Issues:
- Google Forms Help: https://support.google.com/docs

### Netlify Issues:
- Netlify Support: https://netlify.com/support
- Chat support available 24/7

### Vercel Issues:
- Vercel Docs: https://vercel.com/docs

### GoDaddy Domain Issues:
- GoDaddy Support: https://www.godaddy.com/help
- Phone support available

---

## Documents to Keep Handy

1. ✅ **QUICK_START.md** - Overview
2. ✅ **GOOGLE_FORMS_SETUP.md** - Detailed form creation
3. ✅ **FORM_ID_REPLACEMENT_GUIDE.md** - How to update HTML
4. ✅ **DEPLOYMENT_GUIDE.md** - Hosting & domain setup
5. ✅ **CHANGES_MADE.md** - What was modified
6. ✅ **This checklist** - Step-by-step tracking

---

## Time Breakdown

| Phase | Task | Time | Status |
|-------|------|------|--------|
| 1 | Read Documentation | 5 min | 📝 |
| 2 | Create Google Forms | 15 min | 📝 |
| 3 | Update HTML & Test | 5 min | 📝 |
| 4 | Deploy to Hosting | 5 min | 📝 |
| 5 | Connect Domain | 2 min | 📝 |
| 6 | Wait & Verify | 24-48 hrs | ⏳ |
| **TOTAL ACTIVE WORK** | | **32 min** | ✅ |

---

## Success Indicators

✅ You're successful when:
- [ ] Website loads at your domain
- [ ] All pages display correctly
- [ ] Both forms appear embedded
- [ ] Forms accept submissions
- [ ] Submissions appear in Google Sheets
- [ ] You can see all booking details
- [ ] Mobile design looks good
- [ ] Links all work

---

## Go Live Strategy

**Best time to launch:**
- Start Google Form creation now
- Deploy website tomorrow
- Set domain pointing today
- Wait 24 hours for DNS
- Should be fully live within 48 hours

---

## Remember

You **do NOT need:**
- ❌ A backend developer
- ❌ A database
- ❌ Server knowledge
- ❌ Coding experience
- ❌ Large budget

You **only need:**
- ✅ 30 minutes of your time
- ✅ Google account (free)
- ✅ Netlify account (free)
- ✅ Your GoDaddy domain (already paid)

---

## Final Words

Your website is **95% complete!**

Just follow this checklist step-by-step and you'll be live within 1 hour of active work.

**Let's do this! 🚀**

---

**Start here:** Complete Phase 1 (Read Documentation)
