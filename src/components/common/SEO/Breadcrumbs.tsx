import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Icon, Text } from '@/components/common';
import { StructuredData } from './StructuredData';
import { generateBreadcrumbSchema, type BreadcrumbItem } from '@/lib/seo';
import { siteConfig } from '@/config/seo';
import { ROUTES } from '@/config';

interface BreadcrumbsProps {
  items?: { label: string; href: string }[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  [ROUTES.HOME]: 'nav.home',
  [ROUTES.ABOUT]: 'nav.about',
  [ROUTES.PROJECTS]: 'nav.projects',
  [ROUTES.SERVICES]: 'nav.services',
  [ROUTES.BLOG]: 'nav.blog',
  [ROUTES.RESUME]: 'nav.resume',
  [ROUTES.CONTACT]: 'nav.contact',
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const breadcrumbs = items || generateBreadcrumbsFromPath(location.pathname, t);

  if (breadcrumbs.length <= 1) return null;

  const schemaItems: BreadcrumbItem[] = breadcrumbs.map((item) => ({
    name: item.label,
    url: `${siteConfig.url}${item.href}`,
  }));

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(schemaItems)} />

      <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
        <ol className="flex items-center gap-2 flex-wrap">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <Icon name="chevron-right" size="xs" className="text-neutral-600" />
                )}

                {isLast ? (
                  <Text size="sm" color="muted" aria-current="page">
                    {item.label}
                  </Text>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

function generateBreadcrumbsFromPath(
  pathname: string,
  t: (key: string) => string
): { label: string; href: string }[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: t('nav.home'), href: ROUTES.HOME }];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const labelKey = routeLabels[currentPath];
    
    if (labelKey) {
      breadcrumbs.push({ label: t(labelKey), href: currentPath });
    } else {
      const formattedLabel = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ label: formattedLabel, href: currentPath });
    }
  }

  return breadcrumbs;
}

export default Breadcrumbs;