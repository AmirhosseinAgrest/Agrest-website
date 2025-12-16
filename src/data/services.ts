import type { IconName } from '@/components/common/Icon';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: IconName;
  color: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'development',
    titleKey: 'services.list.development.title',
    descriptionKey: 'services.list.development.description',
    icon: 'code',
    color: '#3b82f6',
    features: [
      'Single Page Applications',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Custom Web Platforms',
    ],
  },
  {
    id: 'design',
    titleKey: 'services.list.design.title',
    descriptionKey: 'services.list.design.description',
    icon: 'palette',
    color: '#ec4899',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Design Systems',
      'Prototyping',
    ],
  },
  {
    id: 'consulting',
    titleKey: 'services.list.consulting.title',
    descriptionKey: 'services.list.consulting.description',
    icon: 'terminal',
    color: '#10b981',
    features: [
      'Code Review',
      'Architecture Planning',
      'Performance Optimization',
      'Team Training',
    ],
  },
  {
    id: 'architecture',
    titleKey: 'services.list.architecture.title',
    descriptionKey: 'services.list.architecture.description',
    icon: 'layers',
    color: '#f59e0b',
    features: [
      'System Design',
      'Database Architecture',
      'API Design',
      'Cloud Infrastructure',
    ],
  },
];