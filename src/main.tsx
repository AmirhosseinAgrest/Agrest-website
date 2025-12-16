import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { Loading } from '@/components/common';
import '@/styles/globals.css';

function AppLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-950">
      <Loading size="lg" />
    </div>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<AppLoader />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>
);