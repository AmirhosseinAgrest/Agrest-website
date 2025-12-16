export const siteConfig = {
  name: 'Agrest',
  author: 'Amirhossein Agrest',
  url: import.meta.env.VITE_SITE_URL || 'https://agrest.netlify.app',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'amirhosseinagrest@gmail.com',
  
  defaultMeta: {
    title: 'Agrest — Amirhossein Agrest',
    description: 'Official personal website of Amirhossein Agrest. Software Engineer crafting premium digital experiences.',
    image: '/images/og-image.png',
    type: 'website' as const,
  },

  social: {
    twitter: '@amirhosseinagrest',
    github: 'amirhosseinagrest',
    linkedin: 'amirhosseinagrest',
  },
};

export interface PageMeta {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
  noIndex?: boolean;
}

export function getFullTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.defaultMeta.title;
  return `${pageTitle} — ${siteConfig.name}`;
}

export function getFullImageUrl(imagePath?: string): string {
  const image = imagePath || siteConfig.defaultMeta.image;
  if (image.startsWith('http')) return image;
  return `${siteConfig.url}${image}`;
}