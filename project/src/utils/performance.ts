// Performance monitoring and optimization utilities

/**
 * Throttle function to limit function execution frequency
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce function to delay function execution
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImage(img: HTMLImageElement): void {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    imageObserver.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  }
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string): void {
  if (document.querySelector(`link[href="${href}"]`)) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Measure performance metrics
 */
export function measurePerformance(): void {
  if ('PerformanceObserver' in window && 'PerformanceEntry' in window) {
    try {
      // Measure Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        if (lastEntry) {
          const lcp = lastEntry.renderTime || lastEntry.loadTime;
          if (lcp > 2500) {
            console.warn('LCP is slow:', lcp, 'ms');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          if (fid > 100) {
            console.warn('FID is slow:', fid, 'ms');
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as any[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            if (clsValue > 0.1) {
              console.warn('CLS is high:', clsValue);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Silently fail if PerformanceObserver is not fully supported
    }
  }
}

/**
 * Optimize scroll performance with requestAnimationFrame
 */
export function optimizedScroll(callback: () => void): () => void {
  let ticking = false;
  
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', onScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', onScroll);
}

