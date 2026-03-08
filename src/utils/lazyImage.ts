"use client";
/**
 * Advanced Lazy Image Loading Utility
 * Optimized for 144Hz displays with Intersection Observer
 */

import { useEffect, RefObject } from 'react';

interface LazyImageOptions {
  rootMargin?: string;
  threshold?: number;
  fadeInDuration?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export class LazyImageLoader {
  private observer: IntersectionObserver | null = null;
  private loadedImages: Set<HTMLImageElement> = new Set();

  constructor(options: LazyImageOptions = {}) {
    const {
      rootMargin = '50px',
      threshold = 0.01,
    } = options;

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              this.loadImage(img, options);
              this.observer?.unobserve(img);
            }
          });
        },
        {
          rootMargin,
          threshold,
        }
      );
    }
  }

  private loadImage(img: HTMLImageElement, options: LazyImageOptions) {
    if (this.loadedImages.has(img)) return;

    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    if (!src && !srcset) return;

    // Apply GPU acceleration
    img.style.transform = 'translateZ(0)';
    img.style.willChange = 'opacity';
    img.style.backfaceVisibility = 'hidden';
    img.style.opacity = '0';
    img.style.transition = `opacity ${options.fadeInDuration || 300}ms ease-in-out`;

    const tempImg = new Image();

    tempImg.onload = () => {
      requestAnimationFrame(() => {
        if (src) img.src = src;
        if (srcset) img.srcset = srcset;
        
        // Remove data attributes
        delete img.dataset.src;
        delete img.dataset.srcset;

        // Fade in
        requestAnimationFrame(() => {
          img.style.opacity = '1';
        });

        this.loadedImages.add(img);
        options.onLoad?.();

        // Cleanup will-change after animation
        setTimeout(() => {
          img.style.willChange = 'auto';
        }, (options.fadeInDuration || 300) + 100);
      });
    };

    tempImg.onerror = () => {
      options.onError?.();
    };

    if (src) tempImg.src = src;
    if (srcset) tempImg.srcset = srcset;
  }

  observe(img: HTMLImageElement) {
    if (this.observer) {
      this.observer.observe(img);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadImage(img, {});
    }
  }

  disconnect() {
    this.observer?.disconnect();
    this.loadedImages.clear();
  }
}

// Singleton instance
let globalLazyLoader: LazyImageLoader | null = null;

export function initLazyImageLoader(options?: LazyImageOptions): LazyImageLoader {
  if (!globalLazyLoader) {
    globalLazyLoader = new LazyImageLoader(options);
  }
  return globalLazyLoader;
}

export function observeLazyImage(img: HTMLImageElement) {
  const loader = initLazyImageLoader();
  loader.observe(img);
}

// React Hook for lazy images
export function useLazyImage(ref: RefObject<HTMLImageElement>, options?: LazyImageOptions) {
  useEffect(() => {
    const img = ref.current;
    if (!img) return;

    const loader = initLazyImageLoader(options);
    loader.observe(img);

    return () => {
      // Cleanup handled by the loader
    };
  }, [ref, options]);
}

// Helper to optimize existing images
export function optimizeImageElement(img: HTMLImageElement) {
  img.loading = 'lazy';
  img.decoding = 'async';
  img.style.contentVisibility = 'auto';
  img.style.transform = 'translateZ(0)';
  img.style.backfaceVisibility = 'hidden';
  (img.style as any).webkitBackfaceVisibility = 'hidden';
}

