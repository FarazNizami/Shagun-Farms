# Google Forms Integration Guide for Shagun Farms

## Quick Setup to Get Your Website Live

This guide will help you integrate Google Forms with your website for bookings and inquiries - **zero backend needed, just 15 minutes of setup!**

---

## Step 1: Create Booking Form in Google Forms

1. Go to **https://forms.google.com**
2. Click **"+ New Form"** or **"Create"**
3. Give it title: **"Shagun Farms - Booking Inquiry"**
4. Add these fields (click "+" for each):

### Fields to Add:

- **Full Name** (Short Answer) - Required ✓
- **Email Address** (Email) - Required ✓
- **Phone Number** (Short Answer) - Required ✓
- **Event Date** (Date) - Required ✓
- **Event Type** (Multiple Choice)
  - Wedding
  - Reception
  - Engagement
  - Birthday
  - Corporate Event
  - Other
- **Number of Guests** (Multiple Choice)
  - 100-300
  - 300-600
  - 600-1000
  - 1000+
- **Venue Type** (Multiple Choice)
  - Grand Ballroom
  - Poolside Lawn
  - Banquet Hall
  - Not Sure - Need Suggestions
- **Room Accommodations Required?** (Multiple Choice)
  - Yes
  - No
  - Maybe
- **Special Requirements** (Paragraph Text)

5. Once created, click **Send** button (top right)
6. **Copy the form link** - looks like: `https://forms.google.com/gviz/tq?tqx=out:csv&key=XXXXX`
7. Keep this link safe ⭐

---

## Step 2: Create Contact Form in Google Forms

1. Create another new form
2. Title: **"Shagun Farms - Contact Message"**
3. Add fields:

- **Your Name** (Short Answer) - Required ✓
- **Email Address** (Email) - Required ✓
- **Phone Number** (Short Answer) - Required ✓
- **Event Type** (Multiple Choice)
  - Wedding
  - Reception
  - Corporate
  - Personal Event
  - General Inquiry
  - Other
- **Subject** (Short Answer) - Required ✓
- **Message** (Paragraph Text) - Required ✓

4. Copy the form link
5. Keep safe ⭐

---

## Step 3: Get Form Embed Codes

**For each form:**

1. Click the **Send** button (top right)
2. Click the **"<>" Embed** icon (looks like angle brackets)
3. Copy the **iframe code** - looks like:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf..." width="100%" height="630" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
```
4. **Copy everything between `src="` and the closing `"`**
   - Format: `https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform?embedded=true`

---

## Step 4: Update Your Website

### For Booking Form (booking.html):

Search for this placeholder line in your `booking.html`:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
```

**Replace `1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`** with the ID from your Booking Form

**Example:** If your form link is:
```
https://docs.google.com/forms/d/e/1FAIpQLSf_abc123def456ghi789/viewform?embedded=true
```
Replace with: `1FAIpQLSf_abc123def456ghi789`

### For Contact Form (contact.html):

Same process! Replace the placeholder ID with your Contact Form ID.

---

## Step 5: View Responses

Your form responses automatically go to **Google Sheets**:

1. In Google Forms, click the **"Responses"** tab
2. Click the **green Sheets icon** 🟢
3. A Google Sheet will open with all submissions
4. You can:
   - View all bookings/inquiries
   - Download as Excel
   - Set up notifications
   - Share with team members

---

## Step 6: Deploy Website

### Option A: Use Your GoDaddy Hosting

1. Ask GoDaddy support for FTP/SFTP details
2. Upload all HTML, CSS, JS files to your domain
3. Point domain to your hosting

### Option B: Free Hosting (Recommended for fast setup)

**Vercel (Recommended - Easiest)**
1. Go to **https://vercel.com**
2. Connect your GitHub repo
3. Click Deploy
4. Done! Website is live

**Netlify**
1. Go to **https://netlify.com**
2. Drag & drop your project folder
3. Website is live in seconds

**GitHub Pages (Free)**
1. Upload to GitHub
2. Enable Pages in settings
3. Website is live

---

## Step 7: Connect Your GoDaddy Domain

Once website is hosted somewhere:

1. **Log into GoDaddy** account
2. Go to **Domains > Your Domain**
3. Click **Manage DNS**
4. Add **A Records** or **CNAME** pointing to your hosting provider
5. Wait 24-48 hours for DNS propagation

---

## Quick Reference

| Page | Form Type | File |
|------|-----------|------|
| Booking | Booking Inquiry | `booking.html` |
| Contact | Contact Message | `contact.html` |

---

## Testing

Once you update the forms:

1. Visit `booking.html` in your browser
2. Fill the form with test data
3. Submit
4. Check **Google Sheets** response tab - you should see your submission!

---

## Support

If forms don't appear:
- Check iframe `src` URL is correct (no spaces)
- Make sure it ends with `/viewform?embedded=true`
- Clear browser cache (Ctrl+Shift+Delete)
- Try in incognito mode

---

## What's Next (Future Enhancements)

Once live and getting responses:
- Track responses in Google Sheets
- Send auto-reply emails
- Add payment options (Razorpay/PayU)
- Build actual backend later if needed

**You're now ready to launch! 🚀**
