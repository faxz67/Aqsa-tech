// Performance optimizations guide
// This file documents performance optimizations applied to the project

export const performanceOptimizations = {
  // 1. Code Splitting
  codeSplitting: {
    reactVendor: ['react', 'react-dom', 'react-router-dom'],
    framerMotion: ['framer-motion'],
    lucideIcons: ['lucide-react'],
  },

  // 2. Image Optimization
  imageOptimization: {
    lazyLoading: true,
    decoding: 'async',
    fetchPriority: 'low', // except for above-fold images
    widthHeightAttributes: true,
  },

  // 3. Font Optimization
  fontOptimization: {
    fontDisplay: 'swap',
    preload: true,
    subset: ['latin'], // Only load needed character sets
  },

  // 4. Build Optimizations
  buildOptimizations: {
    minify: 'terser',
    compress: {
      passes: 3,
      dropConsole: true,
      dropDebugger: true,
    },
    cssCodeSplit: true,
    sourcemap: false,
  },

  // 5. Caching
  caching: {
    serviceWorker: true,
    cacheHeaders: {
      static: 'max-age=31536000, immutable',
      dynamic: 'max-age=3600',
    },
  },
};

