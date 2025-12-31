import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load App for code splitting
const App = lazy(() => import('./App.tsx'));

// Performance: Register Service Worker for caching (non-blocking)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Use requestIdleCallback for non-critical service worker registration
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(() => {
          // Silently fail - service worker is not critical
        });
    }, { timeout: 5000 });
  } else {
    const handleLoad = (): void => {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(() => {
          // Silently fail
        });
    };
    const win = window as Window & typeof globalThis;
    win.addEventListener('load', handleLoad);
  }
}

// Performance: Initialize performance monitoring in development
if (import.meta.env.DEV) {
  import('./utils/performance').then(({ measurePerformance }) => {
    measurePerformance();
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <Suspense fallback={<div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:'40px',height:'40px',border:'3px solid #f3f4f6',borderTopColor:'#45C0B0',borderRadius:'50%',animation:'spin 0.6s linear infinite'}}></div></div>}>
        <App />
      </Suspense>
    </LanguageProvider>
  </StrictMode>
);
