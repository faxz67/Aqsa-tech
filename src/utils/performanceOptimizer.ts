/**
 * Advanced Performance Optimizer for 144Hz Displays
 * Handles FPS monitoring, frame drops, and dynamic optimization
 */

class PerformanceOptimizer {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 0;
  private rafId: number | null = null;
  private isMonitoring = false;
  private targetFPS = 144;
  private fpsHistory: number[] = [];
  private readonly historySize = 60; // 1 second at 60fps

  constructor() {
    this.detectRefreshRate();
  }

  /**
   * Detect display refresh rate
   */
  private async detectRefreshRate() {
    if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
      // Modern browsers support this
      this.targetFPS = 144; // Assume high refresh rate
    } else {
      // Fallback: measure actual frame rate
      let frames = 0;
      const startTime = performance.now();

      const measure = () => {
        frames++;
        if (performance.now() - startTime < 1000) {
          requestAnimationFrame(measure);
        } else {
          this.targetFPS = Math.round(frames);
          console.log(`[Performance] Detected refresh rate: ${this.targetFPS}Hz`);
        }
      };

      requestAnimationFrame(measure);
    }
  }

  /**
   * Start FPS monitoring
   */
  startMonitoring() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.lastTime = performance.now();
    this.frameCount = 0;
    this.monitorFrame();
  }

  /**
   * Stop FPS monitoring
   */
  stopMonitoring() {
    this.isMonitoring = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * Monitor individual frames
   */
  private monitorFrame = () => {
    if (!this.isMonitoring) return;

    const currentTime = performance.now();
    const delta = currentTime - this.lastTime;

    this.frameCount++;

    // Calculate FPS every second
    if (delta >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.fpsHistory.push(this.fps);

      // Keep history size limited
      if (this.fpsHistory.length > this.historySize) {
        this.fpsHistory.shift();
      }

      // Check for performance issues
      if (this.fps < this.targetFPS * 0.8) {
        this.handleLowFPS();
      }

      this.frameCount = 0;
      this.lastTime = currentTime;
    }

    this.rafId = requestAnimationFrame(this.monitorFrame);
  };

  /**
   * Handle low FPS scenarios
   */
  private handleLowFPS() {
    console.warn(`[Performance] Low FPS detected: ${this.fps}/${this.targetFPS}`);

    // Reduce animation complexity
    this.reduceAnimations();
  }

  /**
   * Reduce animation complexity dynamically
   */
  private reduceAnimations() {
    // Disable non-critical animations
    document.body.classList.add('reduce-animations');

    // Remove will-change from non-critical elements
    const elements = document.querySelectorAll('[style*="will-change"]');
    elements.forEach((el) => {
      if (!(el as HTMLElement).classList.contains('critical-animation')) {
        (el as HTMLElement).style.willChange = 'auto';
      }
    });
  }

  /**
   * Get current FPS
   */
  getCurrentFPS(): number {
    return this.fps;
  }

  /**
   * Get average FPS
   */
  getAverageFPS(): number {
    if (this.fpsHistory.length === 0) return 0;
    const sum = this.fpsHistory.reduce((a, b) => a + b, 0);
    return Math.round(sum / this.fpsHistory.length);
  }

  /**
   * Get performance metrics
   */
  getMetrics() {
    return {
      currentFPS: this.fps,
      averageFPS: this.getAverageFPS(),
      targetFPS: this.targetFPS,
      frameDrops: this.fpsHistory.filter(fps => fps < this.targetFPS * 0.9).length,
      totalFrames: this.fpsHistory.length,
    };
  }
}

// Singleton instance
let optimizerInstance: PerformanceOptimizer | null = null;

export function getPerformanceOptimizer(): PerformanceOptimizer {
  if (!optimizerInstance) {
    optimizerInstance = new PerformanceOptimizer();
  }
  return optimizerInstance;
}

/**
 * Optimize element for high refresh rate displays
 */
export function optimizeElement(element: HTMLElement, options: {
  enableGPU?: boolean;
  enableWillChange?: boolean;
  properties?: string[];
} = {}) {
  const {
    enableGPU = true,
    enableWillChange = false,
    properties = ['transform', 'opacity']
  } = options;

  if (enableGPU) {
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    (element.style as any).webkitBackfaceVisibility = 'hidden';
  }

  if (enableWillChange) {
    element.style.willChange = properties.join(', ');

    // Auto-remove will-change after animation
    const removeWillChange = () => {
      element.style.willChange = 'auto';
      element.removeEventListener('transitionend', removeWillChange);
      element.removeEventListener('animationend', removeWillChange);
    };

    element.addEventListener('transitionend', removeWillChange);
    element.addEventListener('animationend', removeWillChange);
  }
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll/resize events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastRan: number;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      lastRan = Date.now();
      inThrottle = true;

      setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
        inThrottle = false;
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Request Idle Callback polyfill
 */
export function requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  }

  // Fallback
  const start = Date.now();
  return setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
    });
  }, 1) as unknown as number;
}

/**
 * Cancel Idle Callback polyfill
 */
export function cancelIdleCallback(id: number): void {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  const criticalImages = [
    '/Logo%20Chatgpt.png',
    '/Hero%20Clip.mp4',
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = src.endsWith('.mp4') ? 'video' : 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Initialize performance optimizations
 */
export function initPerformanceOptimizations() {
  // Start monitoring
  const optimizer = getPerformanceOptimizer();
  optimizer.startMonitoring();

  // Preload critical resources
  preloadCriticalResources();

  // Log metrics every 10 seconds in development
  if (process.env.NODE_ENV === 'development') {
    setInterval(() => {
      const metrics = optimizer.getMetrics();
      console.log('[Performance Metrics]', metrics);
    }, 10000);
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    optimizer.stopMonitoring();
  });
}

export default PerformanceOptimizer;

