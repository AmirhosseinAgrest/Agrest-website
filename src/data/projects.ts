import type { IconName } from '@/components/common/Icon';

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'backend' | 'fullstack';

export interface ProjectLink {
  type: 'live' | 'github' | 'case-study' | 'figma';
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  images?: string[];
  links: ProjectLink[];
  featured: boolean;
  year: number;
  client?: string;
  duration?: string;
  role?: string;
  highlights?: string[];
}

export interface ProjectCategoryInfo {
  key: ProjectCategory | 'all';
  labelKey: string;
  icon: IconName;
}

export const projectCategories: ProjectCategoryInfo[] = [
  { key: 'all', labelKey: 'projects.categories.all', icon: 'grid' },
  { key: 'web', labelKey: 'projects.categories.web', icon: 'globe' },
  { key: 'mobile', labelKey: 'projects.categories.mobile', icon: 'phone' },
  { key: 'fullstack', labelKey: 'projects.categories.fullstack', icon: 'layers' },
  { key: 'design', labelKey: 'projects.categories.design', icon: 'palette' },
  { key: 'backend', labelKey: 'projects.categories.backend', icon: 'terminal' },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'nexa-os',
    title: 'NexaOS — Web Desktop Environment',
    description: 'A modern web‑based operating system with draggable windows, apps, animations, and a full UI system.',
    longDescription:
      'NexaOS is a fully interactive web desktop environment built with React, TypeScript, and Tailwind. It includes draggable windows, a taskbar, app launcher, animations, and a modular UI architecture designed for scalability.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: '/images/projects/nexa.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest/Nexa-OS' },
    ],
    featured: true,
    year: 2025,
    role: 'Creator & Frontend Architect',
    highlights: [
      'Fully interactive window system',
      'Custom UI components and animations',
      'Optimized for performance and modularity',
    ],
  },

  {
    id: 'proj-2',
    slug: 'talkify',
    title: 'Talkify — Modern Messaging App',
    description: 'A simple, clean, Telegram‑style messaging app with real‑time chat and modern UI.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
    image: '/images/projects/talkify.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: true,
    year: 2025,
    role: 'Fullstack Developer',
    highlights: [
      'Real‑time messaging',
      'Clean and minimal UI',
      'User authentication and chat rooms',
    ],
  },

  {
    id: 'proj-3',
    slug: 'velora-shop',
    title: 'Velora Shop — E‑Commerce Platform',
    description: 'A complete e‑commerce system with cart, checkout, admin panel, and backend API.',
    category: 'fullstack',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'],
    image: '/images/projects/velora.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: true,
    year: 2025,
    role: 'Fullstack Developer',
    highlights: [
      'Admin dashboard for product management',
      'Cart and checkout system',
      'Backend API with authentication',
    ],
  },

  {
    id: 'proj-4',
    slug: 'agrest-website',
    title: 'Agrest Personal Website',
    description: 'A premium personal website with multilingual support, animations, and a custom design system.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'i18n'],
    image: '/images/projects/agrest.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest/Agrest-website' },
    ],
    featured: true,
    year: 2025,
    role: 'Frontend Developer',
    highlights: [
      'Supports Persian, English, and French',
      'Custom UI components and animations',
      'Fully responsive and optimized',
    ],
  },

  {
    id: 'proj-5',
    slug: 'agrestchan-blockchain',
    title: 'AgrestChan Blockchain',
    description: 'A custom blockchain inspired by Bitcoin with blocks, hashing, transactions, and mining simulation.',
    category: 'backend',
    technologies: ['Node.js', 'TypeScript', 'Crypto'],
    image: '/images/projects/blockchain.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Blockchain Developer',
    highlights: [
      'Block creation and hashing',
      'Transaction simulation',
      'Mining and validation logic',
    ],
  },

  {
    id: 'proj-6',
    slug: 'agrestchan-wallet-web',
    title: 'AgrestChan Wallet — Web Version',
    description: 'A web wallet for managing AgrestChan blockchain accounts, sending and receiving tokens.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/wallet-web.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Frontend Developer',
    highlights: [
      'Send/receive tokens',
      'Private key management',
      'Blockchain integration',
    ],
  },

  {
    id: 'proj-7',
    slug: 'agrestchan-wallet-extension',
    title: 'AgrestChan Wallet — Browser Extension',
    description: 'A browser extension wallet for quick access to AgrestChan blockchain.',
    category: 'web',
    technologies: ['JavaScript', 'Manifest V3', 'React'],
    image: '/images/projects/wallet-extension.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Extension Developer',
    highlights: [
      'Quick access to wallet',
      'Secure key storage',
      'Send/receive tokens',
    ],
  },

  {
    id: 'proj-8',
    slug: 'agrestchan-exchange',
    title: 'AgrestChan Exchange',
    description: 'A simulated crypto exchange for buying, selling, staking, and trading with random price generation.',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Tailwind'],
    image: '/images/projects/exchange.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Fullstack Developer',
    highlights: [
      'Buy/sell simulation',
      'Staking system',
      'Randomized price engine',
    ],
  },

  {
    id: 'proj-9',
    slug: 'aggram',
    title: 'AGgram — Mini Instagram',
    description: 'A simplified Instagram‑style social platform with posts, likes, and profiles.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/aggram.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Frontend Developer',
    highlights: [
      'Post feed and profiles',
      'Like system',
      'Clean and modern UI',
    ],
  },

  {
    id: 'proj-10',
    slug: 'agrona',
    title: 'Agrona — Farming Mini‑Game',
    description: 'A farming and trading mini‑game with planting, harvesting, and card‑based mechanics.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/agrona.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Game Developer',
    highlights: [
      'Planting and harvesting system',
      'Trading and economy',
      'Card‑based gameplay',
    ],
  },

  {
    id: 'proj-11',
    slug: 'bankrush',
    title: 'BankRush — Banking Mini‑Game',
    description: 'A Telegram‑style banking game where players manage a virtual bank and assets.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    image: '/images/projects/bankrush.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Game Developer',
    highlights: [
      'Bank management system',
      'Card mechanics',
      'Asset control gameplay',
    ],
  },

  {
    id: 'proj-12',
    slug: 'bizmate',
    title: 'BizMate — AI Business Assistant',
    description: 'A platform for managing money and business operations with AI‑powered insights.',
    category: 'fullstack',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'AI APIs'],
    image: '/images/projects/bizmate.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Fullstack Developer',
    highlights: [
      'AI‑powered business insights',
      'Financial tracking',
      'Smart recommendations',
    ],
  },

  {
    id: 'proj-13',
    slug: 'eduverse',
    title: 'EduVerse — Learning Platform',
    description: 'An educational platform connecting teachers and students with AI‑powered tools.',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'AI APIs'],
    image: '/images/projects/eduverse.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'Fullstack Developer',
    highlights: [
      'Online exams',
      'Teacher‑student communication',
      'AI study assistant',
    ],
  },

  {
    id: 'proj-14',
    slug: 'finger-control',
    title: 'Finger Control — Hand Tracking Mouse',
    description: 'Control the mouse cursor using hand and finger tracking via phone camera.',
    category: 'backend',
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    image: '/images/projects/finger.jpg',
    links: [
      { type: 'github', url: 'https://github.com/AmirhosseinAgrest' },
    ],
    featured: false,
    year: 2025,
    role: 'AI/Computer Vision Developer',
    highlights: [
      'Hand tracking with camera',
      'Cursor movement simulation',
      'Gesture‑based controls',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}