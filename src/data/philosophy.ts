import type { IconName } from '@/components/common/Icon';

export interface Principle {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: IconName;
  color: string;
}

export interface PhilosophyQuote {
  text: string;
  author?: string;
}

export const principles: Principle[] = [
  {
    id: 'clean',
    titleKey: 'philosophy.principles.clean.title',
    descriptionKey: 'philosophy.principles.clean.description',
    icon: 'code',
    color: '#3b82f6',
  },
  {
    id: 'minimal',
    titleKey: 'philosophy.principles.minimal.title',
    descriptionKey: 'philosophy.principles.minimal.description',
    icon: 'layers',
    color: '#8b5cf6',
  },
  {
    id: 'user',
    titleKey: 'philosophy.principles.user.title',
    descriptionKey: 'philosophy.principles.user.description',
    icon: 'heart',
    color: '#ec4899',
  },
  {
    id: 'continuous',
    titleKey: 'philosophy.principles.continuous.title',
    descriptionKey: 'philosophy.principles.continuous.description',
    icon: 'star',
    color: '#10b981',
  },
];

export const philosophyQuote: PhilosophyQuote = {
  text: 'philosophy.quote',
  author: 'Amirhossein Agrest',
};

export const coreBeliefs = [
  {
    id: 'belief-1',
    text: 'Every line of code should be intentional and serve a purpose.',
  },
  {
    id: 'belief-2',
    text: 'Simplicity is the ultimate sophistication in software design.',
  },
  {
    id: 'belief-3',
    text: 'User experience should never be sacrificed for developer convenience.',
  },
  {
    id: 'belief-4',
    text: 'Technical debt is a choice, not an inevitability.',
  },
  {
    id: 'belief-5',
    text: 'The best code is the code you dont have to write.',
  },
];