/**
 * 144Hz Performance Optimization Utilities
 * Ultra-smooth performance optimizations for high refresh rate displays
 */

/**
 * Throttle function optimized for 144Hz (6.94ms frame time)
 */
export function throttle144Hz<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 7 // ~144fps = 6.94ms per frame
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const now = performance.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = performance.now();
        func.apply(this, args);
      }, delay - timeSinceLastCall);
    }
  };
}

/**
 * RequestAnimationFrame wrapper optimized for 144Hz
 */
export function raf144Hz(callback: () => void): number {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback); // Double RAF for smoother updates
  });
}

/**
 * Passive event listener helper
 */
export function addPassiveEventListener(
  element: HTMLElement | Window,
  event: string,
  handler: EventListener,
  options: AddEventListenerOptions = {}
): () => void {
  const opts: AddEventListenerOptions = { passive: true, ...options };
  element.addEventListener(event, handler, opts);
  return () => element.removeEventListener(event, handler, opts);
}

/**
 * GPU-accelerated transform helper
 */
export function gpuAccelerate(element: HTMLElement | null): void {
  if (!element) return;
  
  element.style.transform = 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
  element.style.webkitBackfaceVisibility = 'hidden';
  element.style.willChange = 'transform, opacity';
  element.style.isolation = 'isolate';
}

/**
 * Optimize image loading for 144Hz
 */
export function optimizeImage(img: HTMLImageElement): void {
  img.loading = 'lazy';
  img.decoding = 'async';
  img.style.contentVisibility = 'auto';
  img.style.transform = 'translateZ(0)';
  img.style.willChange = 'transform';
}

/**
 * Intersection Observer with 144Hz optimization
 */
export function createOptimizedObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: [0, 0.1, 0.5, 1],
    ...options,
  });
}

/**
 * Batch DOM reads/writes for better performance
 */
export class DOMBatcher {
  private reads: (() => void)[] = [];
  private writes: (() => void)[] = [];
  private scheduled = false;

  read(fn: () => void): void {
    this.reads.push(fn);
    this.schedule();
  }

  write(fn: () => void): void {
    this.writes.push(fn);
    this.schedule();
  }

  private schedule(): void {
    if (this.scheduled) return;
    this.scheduled = true;
    
    raf144Hz(() => {
      // Batch all reads
      this.reads.forEach(fn => fn());
      this.reads = [];
      
      // Then batch all writes
      raf144Hz(() => {
        this.writes.forEach(fn => fn());
        this.writes = [];
        this.scheduled = false;
      });
    });
  }
}

export const domBatcher = new DOMBatcher();

/**
 * Check if device supports high refresh rate
 */
export function supportsHighRefreshRate(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for 120Hz+ displays
  const mediaQuery = window.matchMedia('(min-resolution: 120dpi)');
  return mediaQuery.matches || window.devicePixelRatio >= 2;
}

/**
 * Optimize Framer Motion for 144Hz
 */
export const motionConfig144Hz = {
  transition: {
    type: 'spring' as const,
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  },
  layout: {
    type: 'spring' as const,
    stiffness: 500,
    damping: 30,
  },
};

