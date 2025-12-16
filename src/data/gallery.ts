export type GalleryCategory = 'all' | 'web' | 'mobile' | 'design' | 'branding';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  description?: string;
  link?: string;
}

export const galleryCategories: { key: GalleryCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Design' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'design', label: 'UI Design' },
  { key: 'branding', label: 'Branding' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'E-Commerce Dashboard',
    category: 'web',
    image: '/images/gallery/dashboard-1.jpg',
    aspectRatio: 'landscape',
    description: 'Analytics dashboard for e-commerce platform',
  },
  {
    id: 'gal-2',
    title: 'Mobile Banking App',
    category: 'mobile',
    image: '/images/gallery/mobile-1.jpg',
    aspectRatio: 'portrait',
    description: 'Modern banking application interface',
  },
  {
    id: 'gal-3',
    title: 'Brand Identity',
    category: 'branding',
    image: '/images/gallery/brand-1.jpg',
    aspectRatio: 'square',
    description: 'Complete brand identity design',
  },
  {
    id: 'gal-4',
    title: 'Portfolio Website',
    category: 'web',
    image: '/images/gallery/web-1.jpg',
    aspectRatio: 'landscape',
    description: 'Creative portfolio website design',
  },
  {
    id: 'gal-5',
    title: 'Health App UI',
    category: 'mobile',
    image: '/images/gallery/mobile-2.jpg',
    aspectRatio: 'portrait',
    description: 'Health tracking app interface',
  },
  {
    id: 'gal-6',
    title: 'Design System',
    category: 'design',
    image: '/images/gallery/design-1.jpg',
    aspectRatio: 'landscape',
    description: 'Component library documentation',
  },
  {
    id: 'gal-7',
    title: 'SaaS Landing Page',
    category: 'web',
    image: '/images/gallery/web-2.jpg',
    aspectRatio: 'landscape',
    description: 'Modern SaaS product landing page',
  },
  {
    id: 'gal-8',
    title: 'Logo Collection',
    category: 'branding',
    image: '/images/gallery/brand-2.jpg',
    aspectRatio: 'square',
    description: 'Various logo designs',
  },
  {
    id: 'gal-9',
    title: 'Task Manager UI',
    category: 'design',
    image: '/images/gallery/design-2.jpg',
    aspectRatio: 'landscape',
    description: 'Productivity app interface design',
  },
];

export function getGalleryByCategory(category: GalleryCategory): GalleryItem[] {
  if (category === 'all') return galleryItems;
  return galleryItems.filter((item) => item.category === category);
}