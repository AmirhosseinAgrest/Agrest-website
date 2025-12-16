import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '@/context';
import { AppLayout } from '@/components/layout';
import { ScrollToTop, PageLoading } from '@/components/common';
import { AppRoutes } from '@/router';
import '@/i18n/config';

function AppContent() {
  return (
    <AppLayout>
      <Suspense fallback={<PageLoading />}>
        <AppRoutes />
      </Suspense>
    </AppLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;