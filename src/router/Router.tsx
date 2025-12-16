import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { AppRoutes } from './routes';

interface RouterProps {
  children?: React.ReactNode;
}

export function Router({ children }: RouterProps) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {children}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default Router;