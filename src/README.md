# Venezuelan Express - NFC Art Collection

A unique streetwear experience combining physical garments with digital collectibles and augmented reality.

## Features

- 🎴 **Pokemon-style Trading Cards** - Holographic digital cards with rarity levels
- 📱 **NFC Integration** - Scan physical garments to view digital cards
- 🎯 **Logo Scanning AR** - Detection-based 3D WebGL (logo appears only when detected, locked in 3D space)
- 🎥 **AR Experience** - WebAR overlays with animated holograms
- 💜 **Venezuelan Express Branding** - Bold purple color scheme
- ⚡ **Lightning Fast** - Built with React, TypeScript, and Vite

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Radix UI Components
- Cloudinary (video hosting)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Netlify

This project is pre-configured for Netlify deployment:

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Netlify will auto-detect settings from `netlify.toml`
4. Deploy!

Or use Netlify Drop:
- Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- Drag your project folder
- Done!

### Vercel

Deploy to Vercel with one command:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard.

## NFC Setup

Each t-shirt has an NFC tag that links to:
```
https://your-domain.com/?id=EW001
```

Replace `EW001` with your garment ID. Add new garments to the `GARMENTS_DB` object in `/App.tsx`.

## Project Structure

```
├── src/
│   └── main.tsx              # App entry point
├── App.tsx                   # Main app component
├── components/
│   ├── TradingCard.tsx       # Trading card component
│   ├── ImageTrackingAR.tsx   # Logo scanning AR (NEW!)
│   ├── ARExperience.tsx      # AR camera experience
│   └── ui/                   # shadcn/ui components
├── styles/
│   └── globals.css           # Global styles & Tailwind config
└── package.json              # Dependencies
```

## 📖 Documentation

- **[AR Logo Tracking Guide](./AR-LOGO-TRACKING.md)** - How to use the t-shirt logo scanner
- **[Camera Testing Guide](./CAMERA-TESTING.md)** - Test AR features on different devices
- **[Deployment Guide](./DEPLOYMENT.md)** - Deploy to Netlify/Vercel
- **[Quick Start](./QUICKSTART.md)** - Get started in 60 seconds
- **[Demo Script](./DEMO-SCRIPT.md)** - Show off your AR to customers

## License

© 2025 Venezuelan Express. All rights reserved.
