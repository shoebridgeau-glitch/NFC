# 📷 Camera Testing Guide

Quick reference for testing AR features on different devices.

---

## ✅ Camera Fallback Logic

The app automatically tries cameras in this order:

```
1. Rear Camera (environment) ← Best for AR
   ↓ (if not available)
2. Front Camera (user)
   ↓ (if not available)
3. Any Available Camera
   ↓ (if none available)
4. Show Error Message
```

---

## 💻 Testing on Desktop/Laptop

### Requirements:
- ✅ Webcam (built-in or USB)
- ✅ Modern browser (Chrome, Firefox, Safari, Edge)
- ✅ HTTPS connection (or localhost)

### Steps:
1. Open the app in your browser
2. Navigate to "Scan Logo" or "AR View" tab
3. Click "Activate AR Scanner" or "Launch AR Experience"
4. **Allow camera access** when prompted
5. Your webcam will activate (usually front-facing)

### Common Issues:
- **No camera prompt?** → Check if another app is using the camera
- **Permission denied?** → Click lock icon in address bar → Reset permissions
- **Black screen?** → Refresh page and try again

---

## 📱 Testing on Mobile

### iOS (iPhone/iPad):

**Safari:**
- ✅ Works best on iOS
- ✅ Will use rear camera automatically
- ⚠️ Requires HTTPS (not HTTP)

**Chrome:**
- ✅ Works well
- ⚠️ May ask for camera permission twice

**Steps:**
1. Open Safari/Chrome
2. Navigate to your app URL (must be HTTPS)
3. Tap "Scan Logo" or "AR View"
4. Tap "Activate" button
5. Tap "Allow" when prompted for camera
6. Rear camera should activate

**Troubleshooting iOS:**
- Go to Settings → Safari → Camera → Ask
- Or: Settings → Chrome → Camera → Allow

---

### Android:

**Chrome:**
- ✅ Recommended browser
- ✅ Excellent camera support

**Firefox:**
- ✅ Works well
- ⚠️ Sometimes slower to load camera

**Steps:**
1. Open Chrome/Firefox
2. Navigate to your app URL
3. Tap "Scan Logo" or "AR View"
4. Tap "Activate" button
5. Tap "Allow" when prompted
6. Rear camera should activate

**Troubleshooting Android:**
- Settings → Apps → Chrome → Permissions → Camera → Allow
- Or long-press on site URL → Permissions → Camera → Allow

---

## 🌐 Testing with ngrok (Local Development)

If testing locally and need HTTPS:

### Install ngrok:
```bash
npm install -g ngrok
```

### Start your dev server:
```bash
npm run dev
# Running on http://localhost:5173
```

### Create HTTPS tunnel:
```bash
ngrok http 5173
```

You'll get a URL like:
```
https://abc123.ngrok.io
```

Open this URL on your phone to test with real HTTPS!

---

## 🔧 Browser DevTools Testing

### Chrome DevTools:

1. **Open DevTools**: Press F12
2. **Toggle Device Toolbar**: Press Ctrl+Shift+M (Cmd+Shift+M on Mac)
3. **Select Device**: Choose iPhone, iPad, or custom
4. **Camera Simulation**: Click the three dots → More tools → Sensors
5. **Test**: DevTools can't access real camera, but you can test UI

**Note:** DevTools mobile simulation won't give you real camera access - you need a real device or webcam for that.

---

## 📊 Test Checklist

### Desktop:
- [ ] Chrome with webcam
- [ ] Firefox with webcam
- [ ] Safari with webcam (Mac)
- [ ] Edge with webcam (Windows)

### Mobile:
- [ ] iPhone Safari (rear camera)
- [ ] iPhone Chrome (rear camera)
- [ ] Android Chrome (rear camera)
- [ ] Android Firefox (rear camera)

### Features to Test:
- [ ] Camera activates
- [ ] Tap triggers AR effects
- [ ] Effects play smoothly (60fps)
- [ ] Can close AR view
- [ ] Can reactivate AR
- [ ] Error message shows if camera blocked
- [ ] Fallback to front camera works

---

## 🚨 Common Errors & Fixes

### Error: "No camera found"

**Causes:**
- Camera is being used by another app
- Camera permissions denied
- Device has no camera
- Browser doesn't support camera API

**Fixes:**
1. Close other apps using camera (Zoom, Skype, etc.)
2. Grant camera permission
3. Try a different browser
4. Use HTTPS instead of HTTP
5. Restart browser

---

### Error: "NotAllowedError: Permission denied"

**Fix:**
1. Click lock icon in address bar
2. Camera → Allow
3. Refresh page

**On Mobile:**
- Settings → Browser → Permissions → Camera → Allow

---

### Error: "NotFoundError: Requested device not found"

**This is now fixed!** The app will:
1. Try rear camera
2. Fall back to front camera
3. Fall back to any camera
4. Show helpful error if none available

---

### Error: "NotReadableError: Could not start video source"

**Causes:**
- Camera is in use by another app
- Hardware error

**Fixes:**
1. Close all other apps
2. Restart browser
3. Restart device
4. Check if camera works in other apps

---

## 🎯 Production Deployment Testing

### Before deploying:
1. Test on localhost (HTTP) ← Won't work with camera
2. Test on ngrok (HTTPS) ← Will work!
3. Deploy to Netlify/Vercel (HTTPS) ← Will work!
4. Test deployed version on mobile
5. Test on different devices
6. Test on different browsers

### After deploying:
- [ ] Test URL on your phone (scan QR code)
- [ ] Test on friend's iPhone
- [ ] Test on friend's Android
- [ ] Test on tablet
- [ ] Test on desktop

---

## 💡 Pro Testing Tips

### Use QR Codes:
Generate QR code of your URL:
- https://www.qr-code-generator.com/
- Print it or display on screen
- Scan with phone camera → Opens directly in browser

### Remote Debugging:
- **Android**: chrome://inspect (in desktop Chrome)
- **iOS**: Safari → Develop → [Your iPhone]

### Performance Testing:
1. Open DevTools (F12)
2. Go to Performance tab
3. Record while using AR
4. Check FPS (should be 60fps)

---

## 📱 Recommended Test Devices

### Minimum:
- iPhone 8 or newer (iOS 14+)
- Android phone from 2018+ (Android 9+)
- Any laptop with webcam

### Ideal:
- iPhone 12+ (best Safari support)
- Google Pixel or Samsung Galaxy (best Chrome support)
- MacBook Pro with webcam (desktop testing)

---

## ✨ Success Criteria

Your AR is working perfectly when:
- ✅ Camera activates in under 2 seconds
- ✅ Video feed is smooth (no lag)
- ✅ AR effects trigger on tap
- ✅ Effects run at 60fps
- ✅ Can close and reopen without issues
- ✅ Works on both mobile and desktop
- ✅ Helpful error messages if problems occur

---

## 🎉 You're Ready!

If you've tested on:
- ✅ At least one desktop browser
- ✅ At least one mobile device (iOS or Android)
- ✅ Both AR tabs (Scan Logo + AR View)

**Then you're good to deploy!** 🚀

---

## 🔗 Additional Resources

- **WebRTC Test**: https://test.webrtc.org/ (check camera compatibility)
- **Can I Use**: https://caniuse.com/?search=getUserMedia
- **MDN Docs**: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
