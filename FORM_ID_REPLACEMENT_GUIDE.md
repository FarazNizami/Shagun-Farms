# Example: How to Replace Form IDs

## What You're Looking For

In your HTML files, you'll find placeholder lines that look like this:

```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
```

The `XXXX` part is a **placeholder** - you need to replace it with your actual Google Form ID.

---

## Example Workflow

### When You Create a Google Form:

1. **Form created** - You see a URL like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSfAbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit
   ```

2. **Click Send** → **Click "<>" Embed**

3. **You get this:**
   ```html
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAbCdEfGhIjKlMnOpQrStUvWxYz1234567890/viewform?embedded=true" width="100%" height="630" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   ```

4. **The important part is:**
   ```
   1FAIpQLSfAbCdEfGhIjKlMnOpQrStUvWxYz1234567890
   ```
   This is your **Form ID**

---

## Example 1: Booking Form

### Original in booking.html:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
```

### After you create your Booking Form and get ID:
Let's say Google gives you form ID: `1FAIpQLSf123BookingForm456Test789`

### You replace it with:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf123BookingForm456Test789/viewform?embedded=true"
```

---

## Example 2: Contact Form

### Original in contact.html:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
```

### After you create your Contact Form:
Let's say Google gives you: `1FAIpQLSf456ContactForm789Test123`

### You replace it with:
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf456ContactForm789Test123/viewform?embedded=true"
```

---

## Step-by-Step Example

### Before (What you have now):

**booking.html (around line 280):**
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?embedded=true" 
        width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
```

### After (What you'll have):

**booking.html (around line 280):**
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAbCdEfGhIjKlMnOpQrStUvWxYz1234567890/viewform?embedded=true" 
        width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
```

---

## How to Find Your Form ID Quickly

### Method 1 (Easiest):
1. Open your Google Form in browser
2. Click **Send** button → **< > Embed**
3. Copy the whole iframe src URL
4. Extract the ID part (between `/e/` and `/viewform`)

### Method 2:
1. In Google Forms, look at the URL bar
2. Should contain something like: `/forms/d/e/1FAIpQLSf...`
3. That long alphanumeric string is your ID

### Method 3:
1. Open your form
2. Click the **three dots** (⋮) menu
3. Select **"Get pre-filled link"** or **"Get form link"**
4. Copy that link
5. Find the ID between `/e/` and `/viewform`

---

## Common Mistakes to Avoid

❌ **Wrong:**
```html
<!-- Missing /e/ part -->
<iframe src="https://docs.google.com/forms/d/1FAIpQLSf123.../viewform?embedded=true"
```

❌ **Wrong:**
```html
<!-- Extra stuff included -->
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf123.../edit?usp=sf_link"
```

✅ **Correct:**
```html
<!-- Has /e/ and ends with /viewform?embedded=true -->
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf123.../viewform?embedded=true"
```

---

## Quick Test

After replacing the form ID:

1. Open `booking.html` in your browser
   - Double-click the file or drag to browser
2. Scroll to the form section
3. Should see Google Form appear
4. Try filling it out
5. Submit
6. Check your Google Form's "Responses" tab
7. You should see your test submission!

---

## Need Help Finding Specific Lines?

### In booking.html, look for:
- Search for: `docs.google.com/forms`
- Should find around line 280
- Replace the full src URL starting after `src="`

### In contact.html, look for:
- Search for: `docs.google.com/forms`  
- Should find around line 145
- Replace the full src URL starting after `src="`

---

## Tools to Help

### If using VS Code:
1. Press **Ctrl+H** (Find & Replace)
2. Find: `1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
3. Replace with: Your actual booking form ID
4. Click "Replace All"
5. Repeat for contact form ID

---

## Real Example (Mock Data)

Let me show you with real-looking IDs:

### Booking Form ID:
```
1FAIpQLSeK7LmX9_pR2qT3uVw4xYzAbCdEfGhIjKlMnOpQr5sT6uVwXyZ
```

### Contact Form ID:
```
1FAIpQLScUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz1A2b3C4dEfGhIjKl
```

So in your files:

**booking.html:**
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeK7LmX9_pR2qT3uVw4xYzAbCdEfGhIjKlMnOpQr5sT6uVwXyZ/viewform?embedded=true"
```

**contact.html:**
```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUvWxYzAbCdEfGhIjKlMnOpQrStUvWxYz1A2b3C4dEfGhIjKl/viewform?embedded=true"
```

---

**That's it! You now know exactly what to replace! 👍**
