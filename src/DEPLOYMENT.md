# Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is now **100% ready** for Netlify and Vercel deployment!

### Files Created:
- ✅ `package.json` - All dependencies with patch-package fix
- ✅ `index.html` - HTML entry point
- ✅ `src/main.tsx` - React app entry
- ✅ `vite.config.ts` - Vite configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `postcss.config.js` - PostCSS/Tailwind setup
- ✅ `netlify.toml` - Netlify configuration
- ✅ `vercel.json` - Vercel configuration
- ✅ `.gitignore` - Git ignore rules
- ✅ `README.md` - Project documentation

---

## 🚀 Deploy to Netlify (Recommended)

### Option A: Netlify Drop (Easiest - No Git Required)

1. Build locally first:
   ```bash
   npm install
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the **entire project folder** (or just the `dist` folder if you built it)
4. ✨ Done! Get your live URL instantly

### Option B: Netlify + GitHub (Auto-deploy on commits)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Netlify auto-detects settings from `netlify.toml` ✅
6. Click "Deploy site"
7. 🎉 Your site is live!

**Custom Domain (Optional):**
- In Netlify dashboard: Site settings → Domain management
- Add your custom domain (e.g., `venezuelanexpress.com`)

---

## 🚀 Deploy to Vercel

### Option A: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project folder
cd path/to/venezuelan-express

# Deploy
vercel --prod
```

Follow the prompts. Vercel will:
- Auto-detect it's a Vite project ✅
- Use settings from `vercel.json` ✅
- Build and deploy ✅

### Option B: Vercel Dashboard + GitHub

1. Push to GitHub (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects the framework ✅
5. Click "Deploy"
6. 🎉 Live!

---

## 🧪 Test Locally Before Deploying

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Visit: http://localhost:5173

# Build for production (test if it builds successfully)
npm run build

# Preview production build
npm run preview
# Visit: http://localhost:4173
```

---

## 🏷️ NFC URL Setup

Once deployed, your NFC tags should point to:

```
https://your-domain.com/?id=EW001
https://your-domain.com/?id=EW002
```

Replace `your-domain.com` with your actual Netlify/Vercel URL.

### Add New Garments:

Edit `/App.tsx` and add to `GARMENTS_DB`:

```typescript
'EW003': {
  garmentNumber: 3,
  totalSupply: 50,
  brandName: 'VENEZUELAN EXPRESS',
  garmentName: 'Your Garment Name',
  releaseDate: 'Jan 2026',
  rarity: 'Epic' as const,
  imageUrl: 'https://res.cloudinary.com/your-video-url.mp4',
  editionText: '#EW003',
  supplyText: '3 OF 50',
  rarityLevel: 'EPIC',
},
```

---

## 🐛 Troubleshooting

### Build fails with "patch-package not found"
✅ **Fixed!** We added `patch-package` to `package.json`

### Build works locally but fails on Netlify/Vercel
1. Clear build cache in dashboard
2. Try setting Node version to 18 in dashboard
3. Check build logs for specific error

### Figma assets not loading
- Make sure all `figma:asset/*` imports are present
- Check that image files are in the project

### Video not playing
- Ensure Cloudinary URL is correct and publicly accessible
- Check browser console for CORS errors
- Verify video format is MP4

---

## 📊 Post-Deployment

### Monitor Your Site:
- **Netlify:** Analytics in dashboard
- **Vercel:** Analytics + Web Vitals automatically tracked

### Enable HTTPS:
- ✅ Auto-enabled on both Netlify and Vercel

### Add Analytics (Optional):
```bash
npm install @vercel/analytics
```

Then add to `src/main.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// Inside your App component:
<Analytics />
```

---

## 🎉 You're All Set!

Your Venezuelan Express NFC app is production-ready. Just pick Netlify or Vercel and deploy! 💜

**Need help?** Check the logs or the main `README.md`
