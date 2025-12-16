import type { IconName } from '@/components/common/Icon';

export type AchievementType = 'certification' | 'award' | 'recognition';

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  type: AchievementType;
  date: string;
  description?: string;
  credentialUrl?: string;
  image?: string;
  icon: IconName;
  color: string;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Completed Advanced Frontend Architecture Program',
    issuer: 'Self‑Directed Learning',
    type: 'certification',
    date: '2025-01',
    description: 'Completed a full self‑driven program focused on React, TypeScript, Tailwind, and modular UI architecture.',
    icon: 'layers',
    color: '#3b82f6',
  },
  {
    id: 'ach-2',
    title: 'Created Agrest UI Design System',
    issuer: 'Agrest',
    type: 'recognition',
    date: '2025-02',
    description: 'Designed and implemented a complete design system with reusable components, tokens, and animations.',
    icon: 'palette',
    color: '#10b981',
  },
  {
    id: 'ach-3',
    title: 'Developed a Multilingual Website Architecture',
    issuer: 'Agrest',
    type: 'recognition',
    date: '2025-03',
    description: 'Built a scalable i18n system supporting Persian, French, English, and future languages.',
    icon: 'globe',
    color: '#f59e0b',
  },
  {
    id: 'ach-4',
    title: 'Open Source Contributor',
    issuer: 'GitHub',
    type: 'recognition',
    date: '2024-12',
    description: 'Contributed to open‑source projects and published personal utilities and components.',
    credentialUrl: 'https://github.com/AmirhosseinAgrest',
    icon: 'github',
    color: '#6b7280',
  },
  {
    id: 'ach-5',
    title: 'Built Agrest Personal Brand & Portfolio',
    issuer: 'Agrest',
    type: 'award',
    date: '2025-04',
    description: 'Designed and developed a premium personal brand identity and portfolio website.',
    icon: 'star',
    color: '#ec4899',
  },
];
