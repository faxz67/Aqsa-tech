/**
 * Performance Monitoring Utilities
 * Tracks Core Web Vitals and performance metrics
 */

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTFB();
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        const lcpValue = lastEntry.renderTime || lastEntry.loadTime;
        if (lcpValue) {
          this.metrics.lcp = lcpValue;
          this.logMetric('LCP', lcpValue);
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (e) {
      // Silently fail if not supported
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fidValue = entry.processingStart - entry.startTime;
          if (fidValue && fidValue > 0) {
            this.metrics.fid = fidValue;
            this.logMetric('FID', fidValue);
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (e) {
      // Silently fail if not supported
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries() as any[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
            this.logMetric('CLS', clsValue);
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (e) {
      // Silently fail if not supported
    }
  }

  private observeFCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.logMetric('FCP', this.metrics.fcp);
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (e) {
      // Silently fail if not supported
    }
  }

  private observeTTFB(): void {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
        this.logMetric('TTFB', this.metrics.ttfb);
      }
    } catch (e) {
      // Silently fail if not supported
    }
  }

  private logMetric(name: string, value: number | undefined): void {
    if (!value || value <= 0) return;

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    }

    // Send to analytics in production (optional)
    if (process.env.NODE_ENV === 'production') {
      // You can send to your analytics service here
      // Example: sendToAnalytics({ metric: name, value });
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
let performanceMonitorInstance: PerformanceMonitor | null = null;

export function initPerformanceMonitor(): PerformanceMonitor {
  if (!performanceMonitorInstance && typeof window !== 'undefined') {
    performanceMonitorInstance = new PerformanceMonitor();
  }
  return performanceMonitorInstance!;
}

export function getPerformanceMetrics(): PerformanceMetrics {
  return performanceMonitorInstance?.getMetrics() || {};
}

