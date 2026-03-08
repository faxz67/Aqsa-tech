/**
 * Image Optimization Utilities
 * Provides utilities for optimizing image loading and performance
 */

/**
 * Generate responsive image srcset
 */
export function generateSrcSet(
  basePath: string,
  widths: number[] = [400, 800, 1200, 1600]
): string {
  return widths
    .map(width => `${basePath}?w=${width} ${width}w`)
    .join(', ');
}

/**
 * Get optimal image size based on viewport
 */
export function getOptimalImageSize(containerWidth: number, devicePixelRatio: number = 1): number {
  const optimalWidth = containerWidth * devicePixelRatio;
  
  // Round to nearest standard size
  const sizes = [400, 600, 800, 1000, 1200, 1600, 2000];
  return sizes.find(size => size >= optimalWidth) || sizes[sizes.length - 1];
}

/**
 * Lazy load image with Intersection Observer
 */
export function lazyLoadImage(
  img: HTMLImageElement,
  options: IntersectionObserverInit = {}
): () => void {
  if (!('IntersectionObserver' in window)) {
    // Fallback: load immediately
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
          }
          observer.unobserve(target);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.01,
      ...options,
    }
  );

  observer.observe(img);

  return () => observer.disconnect();
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, as: 'image' | 'fetch' = 'image'): void {
  if (document.querySelector(`link[href="${src}"]`)) {
    return; // Already preloaded
  }

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

/**
 * Convert image to WebP format (if supported)
 */
export function getWebPSrc(src: string): string {
  if (src.endsWith('.webp')) {
    return src;
  }
  
  // Check if browser supports WebP
  const canvas = document.createElement('canvas');
  const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  if (supportsWebP) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return src;
}

/**
 * Optimize image loading with proper attributes
 */
export function optimizeImageElement(img: HTMLImageElement): void {
  // Set loading attribute
  if (!img.loading) {
    img.loading = 'lazy';
  }
  
  // Set decoding
  if (!img.decoding) {
    img.decoding = 'async';
  }
  
  // GPU acceleration
  img.style.transform = 'translateZ(0)';
  img.style.willChange = 'transform';
  img.style.backfaceVisibility = 'hidden';
  img.style.contentVisibility = 'auto';
  
  // Add error handling
  img.onerror = () => {
    // Fallback to placeholder or default image
    if (!img.src.includes('placeholder')) {
      img.src = '/Logo Chatgpt.png';
    }
  };
}

