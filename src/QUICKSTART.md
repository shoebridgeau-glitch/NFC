# 🚀 Quick Start Guide

## Deploy in 3 Steps

### ⚡ Method 1: Netlify Drop (60 seconds)

1. **Download this project** from Figma Make
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**
3. **Drag the entire folder** onto the page
4. ✅ **Done!** Get your live URL

---

### 🔧 Method 2: GitHub + Netlify (Auto-deploy)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/venezuelan-express.git
git push -u origin main

# 2. Go to app.netlify.com
# 3. Click "Add new site" → "Import from Git"
# 4. Select your repo
# 5. Click "Deploy site"
# ✅ Done!
```

---

### ⚙️ Method 3: Vercel CLI

```bash
# 1. Install Vercel
npm install -g vercel

# 2. Navigate to your project
cd path/to/venezuelan-express

# 3. Deploy
vercel --prod

# Follow prompts
# ✅ Done!
```

---

## 🧪 Test Locally First

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

Test with NFC params: `http://localhost:5173/?id=EW001`

---

## 🏷️ Your Live URLs

After deploying, your NFC tags should link to:

```
https://your-site.netlify.app/?id=EW001
https://your-site.netlify.app/?id=EW002
```

---

## ✅ What's Already Configured

- ✅ All dependencies installed
- ✅ TypeScript configured
- ✅ Tailwind CSS v4 setup
- ✅ Vite build optimized
- ✅ Netlify/Vercel configs ready
- ✅ AR + video working
- ✅ Responsive design
- ✅ No build errors

**Just deploy and go!** 🎉
