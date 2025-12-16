import { ROUTES } from './routes';
import type { IconName } from '@/components/common/Icon';

export interface NavItem {
  key: string;
  href: string;
  icon?: IconName;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  { key: 'home', href: ROUTES.HOME },
  { key: 'about', href: ROUTES.ABOUT },
  { key: 'projects', href: ROUTES.PROJECTS },
  { key: 'services', href: ROUTES.SERVICES },
  { key: 'blog', href: ROUTES.BLOG },
  { key: 'contact', href: ROUTES.CONTACT },
];

export const footerNavItems: NavItem[] = [
  { key: 'home', href: ROUTES.HOME },
  { key: 'about', href: ROUTES.ABOUT },
  { key: 'projects', href: ROUTES.PROJECTS },
  { key: 'services', href: ROUTES.SERVICES },
  { key: 'blog', href: ROUTES.BLOG },
  { key: 'resume', href: ROUTES.RESUME },
  { key: 'contact', href: ROUTES.CONTACT },
];

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconName;
}

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/AmirhosseinAgrest', icon: 'github' },
  { platform: 'Telegram', url: 'https://t.me/amirhosseinagrest', icon: 'telegram' },
  { platform: 'Instagram', url: 'https://instagram/amirhossein-agrest', icon: 'instagram' },
  { platform: 'Email', url: 'mailto:amirhosseinagrest@gmail.com', icon: 'email' },
];