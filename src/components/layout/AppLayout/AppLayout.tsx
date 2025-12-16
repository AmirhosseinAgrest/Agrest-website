import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SkipLink, ErrorBoundary } from '@/components/common';
import { StructuredData } from '@/components/common/SEO';
import { defaultWebsiteSchema, generateWebsiteSchema } from '@/lib/seo';
import { useLanguage } from '@/context';

interface AppLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
}

export function AppLayout({
  children,
  hideHeader = false,
  hideFooter = false,
  className,
}: AppLayoutProps) {
  const { isRTL } = useLanguage();

  return (
    <ErrorBoundary>
      <div
        className={cn(
          'flex min-h-screen flex-col',
          isRTL && 'font-persian',
          className
        )}
      >
        <StructuredData data={generateWebsiteSchema(defaultWebsiteSchema)} />

        <SkipLink />

        {!hideHeader && <Header />}

        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>

        {!hideFooter && <Footer />}
      </div>
    </ErrorBoundary>
  );
}

export default AppLayout;