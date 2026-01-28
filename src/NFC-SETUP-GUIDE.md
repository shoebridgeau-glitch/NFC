# Venezuelan Express NFC Setup Guide

## 🎯 How to Link Your App to NFC Tags

### Step 1: Deploy Your App

Since this is a React app, you **cannot host it on Carrd** (Carrd is only for simple HTML pages). Instead, use one of these free hosting platforms:

#### Option A: Vercel (Recommended - Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Download/export this project from Figma Make
4. Upload your project to Vercel
5. You'll get a URL like: `https://venezuelan-express.vercel.app`

#### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up and drag-and-drop your project folder
3. You'll get a URL like: `https://venezuelan-express.netlify.app`

#### Option C: GitHub Pages
1. Upload your code to GitHub
2. Enable GitHub Pages in repository settings
3. You'll get a URL like: `https://yourusername.github.io/venezuelan-express`

### Step 2: Add Garments to Your Database

Edit `/App.tsx` and add more garments to the `GARMENTS_DB` object:

```typescript
const GARMENTS_DB: Record<string, any> = {
  'EW001': {
    garmentNumber: 1,
    totalSupply: 1,
    brandName: 'VENEZUELAN EXPRESS',
    garmentName: 'VENEZUELAN-EXPRESS-PROTOTIPO1',
    releaseDate: 'Nov 2025',
    rarity: 'Legendary' as const,
    imageUrl: garmentGif,
    editionText: '#EW001',
    supplyText: '1 OF 1',
    rarityLevel: 'SUPER RARE',
  },
  'EW002': {
    garmentNumber: 2,
    totalSupply: 100,
    brandName: 'VENEZUELAN EXPRESS',
    garmentName: 'Purple Dream Tee',
    releaseDate: 'Dec 2025',
    rarity: 'Rare' as const,
    imageUrl: garmentGif, // Replace with actual image
    editionText: '#EW002',
    supplyText: '2 OF 100',
    rarityLevel: 'RARE',
  },
  // Add more as you create them...
};
```

### Step 3: Program Your NFC Tags

#### What You Need:
- NFC tags (NTAG213, NTAG215, or NTAG216 recommended)
- An NFC-capable smartphone
- An NFC writing app

#### Recommended NFC Writing Apps:

**For iPhone:**
- NFC Tools (Free)
- NFC TagWriter by NXP

**For Android:**
- NFC Tools (Free)
- TagWriter by NXP
- NFC TagInfo

#### How to Write URLs to Tags:

1. **Open your NFC writing app**

2. **Create a new tag with these settings:**
   - Type: URL/URI
   - URL: `https://your-deployed-app.vercel.app/?id=EW001`
   
3. **Write different IDs for each garment:**
   - Garment #1: `?id=EW001`
   - Garment #2: `?id=EW002`
   - Garment #3: `?id=EW003`
   - And so on...

4. **Hold your phone near the NFC tag** to write the URL

5. **Test it** - Tap the tag with your phone to make sure it opens the correct URL

### Step 4: Link from Your Carrd Page

On your Carrd landing page, you can add:
- A button that says "View Collection" → links to your deployed app
- Text like "Tap your garment's NFC tag to view your digital collectible"

---

## 📱 URL Parameter Options

Your app supports two URL formats:
- `?id=EW001` (recommended)
- `?garment=EW001` (alternative)

Both will work the same way.

---

## 🎨 Adding New Garments

Each time you create a new physical garment:

1. Take a photo or create artwork for it
2. Add it to the `GARMENTS_DB` in `/App.tsx`
3. Redeploy your app
4. Program a new NFC tag with the unique ID

---

## 🔒 Security Notes

- NFC tags can be rewritten unless you "lock" them in the NFC writing app
- Consider locking tags after programming to prevent tampering
- Each garment should have a unique ID that's hard to guess (like EW001, not just "1")

---

## ✅ Testing

Before attaching NFC tags to garments:

1. Program a test tag
2. Scan it with multiple phones (iPhone and Android)
3. Verify the correct garment info appears
4. Test the AR experience
5. Make sure the trading card displays correctly

---

## 🆘 Troubleshooting

**Tag doesn't scan:**
- Make sure NFC is enabled on the phone
- iPhone: Requires iOS 13+ and iPhone 7 or newer
- Android: Most phones since 2014 have NFC

**Wrong garment shows up:**
- Check the URL on the tag - make sure it has the right `?id=` parameter
- Verify the ID exists in `GARMENTS_DB` in App.tsx

**App won't load:**
- Check your internet connection
- Make sure the deployed URL is correct
- Verify the app is deployed and live

---

## 💡 Pro Tips

1. **Use QR codes as backup** - Print a QR code on the tag label in case NFC fails
2. **Keep a spreadsheet** - Track which NFC tag ID goes with which physical garment
3. **Test before production** - Always test tags before sewing/attaching them to garments
4. **Waterproof tags** - Use waterproof/washable NFC tags for clothing items

---

Questions? Check your deployed app at your Vercel/Netlify URL first!
