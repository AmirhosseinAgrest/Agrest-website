export const ROUTES = {
  HOME: '/' as string,
  ABOUT: '/about' as string,
  PROJECTS: '/projects' as string,
  PROJECT_DETAIL: '/projects/:slug' as string,
  SERVICES: '/services' as string,
  BLOG: '/blog' as string,
  BLOG_POST: '/blog/:slug' as string,
  RESUME: '/resume' as string,
  CONTACT: '/contact' as string,
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export function getProjectRoute(slug: string): string {
  return ROUTES.PROJECT_DETAIL.replace(':slug', slug);
}

export function getBlogPostRoute(slug: string): string {
  return ROUTES.BLOG_POST.replace(':slug', slug);
}