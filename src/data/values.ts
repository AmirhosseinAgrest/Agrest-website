import type { IconName } from '@/components/common/Icon';

export interface Value {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: IconName;
  color: string;
}

export const values: Value[] = [
  {
    id: 'quality',
    titleKey: 'about.values.quality.title',
    descriptionKey: 'about.values.quality.description',
    icon: 'star',
    color: '#f59e0b',
  },
  {
    id: 'simplicity',
    titleKey: 'about.values.simplicity.title',
    descriptionKey: 'about.values.simplicity.description',
    icon: 'layers',
    color: '#3b82f6',
  },
  {
    id: 'innovation',
    titleKey: 'about.values.innovation.title',
    descriptionKey: 'about.values.innovation.description',
    icon: 'terminal',
    color: '#10b981',
  },
  {
    id: 'collaboration',
    titleKey: 'about.values.collaboration.title',
    descriptionKey: 'about.values.collaboration.description',
    icon: 'heart',
    color: '#ec4899',
  },
];