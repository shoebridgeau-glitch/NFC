# Three.js Configuration

## ✅ Fixed: Multiple Instances Warning

The "Multiple instances of Three.js being imported" warning has been resolved with proper Vite configuration.

## Configuration Details

### 1. **Dependency Deduplication**
```typescript
resolve: {
  dedupe: ['three'],
}
```
- Ensures only one instance of Three.js is used throughout the app
- Prevents version conflicts and duplicate code

### 2. **Optimization**
```typescript
optimizeDeps: {
  include: ['three'],
}
```
- Pre-bundles Three.js during development
- Improves dev server startup time
- Ensures consistent module resolution

### 3. **Code Splitting**
```typescript
manualChunks: {
  'three-vendor': ['three'],
}
```
- Bundles Three.js into a separate chunk
- Improves caching (Three.js changes rarely)
- Reduces main bundle size

## Usage in Components

### ImageTrackingAR.tsx
```typescript
import * as THREE from 'three';
```

This is the only place Three.js is imported in the project.

## Benefits

✅ **No duplicate instances** - Single Three.js bundle
✅ **Better performance** - Optimized module loading
✅ **Smaller bundles** - Code splitting optimization
✅ **Faster builds** - Pre-bundling in dev mode

## Verification

After these changes:
1. The warning should disappear
2. Bundle size should be optimized
3. Three.js loads only once
4. AR features work normally

## Technical Notes

- Three.js is a large library (~600KB minified)
- Proper configuration is essential for web performance
- Deduplication prevents memory issues
- Separate chunk improves cache efficiency
