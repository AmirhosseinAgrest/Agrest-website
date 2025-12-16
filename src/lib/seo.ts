import { siteConfig } from '@/config/seo';

export interface PersonSchema {
  name: string;
  jobTitle: string;
  email: string;
  url: string;
  sameAs: string[];
  image?: string;
}

export interface WebsiteSchema {
  name: string;
  url: string;
  description: string;
  author: PersonSchema;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: PersonSchema;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generatePersonSchema(person: PersonSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    email: person.email,
    url: person.url,
    sameAs: person.sameAs,
    ...(person.image && { image: person.image }),
  };
}

export function generateWebsiteSchema(website: WebsiteSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: website.name,
    url: website.url,
    description: website.description,
    author: generatePersonSchema(website.author),
  };
}

export function generateArticleSchema(article: ArticleSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: generatePersonSchema(article.author),
    publisher: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProjectSchema(project: {
  name: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    keywords: project.technologies.join(', '),
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.url,
    },
  };
}

export const defaultPersonSchema: PersonSchema = {
  name: 'Amirhossein Agrest',
  jobTitle: 'Software Engineer',
  email: 'amirhosseinagrest@gmail.com',
  url: siteConfig.url,
  sameAs: [
    'https://github.com/agrest',
    'https://linkedin.com/in/agrest',
    'https://twitter.com/agrest',
  ],
};

export const defaultWebsiteSchema: WebsiteSchema = {
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.defaultMeta.description,
  author: defaultPersonSchema,
};