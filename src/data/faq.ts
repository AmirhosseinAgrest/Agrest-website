export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
  category?: string;
}

export interface FAQCategory {
  key: string;
  label: string;
}

export const faqCategories: FAQCategory[] = [
  { key: 'all', label: 'All Questions' },
  { key: 'general', label: 'General' },
  { key: 'services', label: 'Services' },
  { key: 'process', label: 'Process' },
  { key: 'pricing', label: 'Pricing' },
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    questionKey: 'faq.items.availability.question',
    answerKey: 'faq.items.availability.answer',
    category: 'general',
  },
  {
    id: 'faq-2',
    questionKey: 'faq.items.timeline.question',
    answerKey: 'faq.items.timeline.answer',
    category: 'process',
  },
  {
    id: 'faq-3',
    questionKey: 'faq.items.technologies.question',
    answerKey: 'faq.items.technologies.answer',
    category: 'services',
  },
  {
    id: 'faq-4',
    questionKey: 'faq.items.remote.question',
    answerKey: 'faq.items.remote.answer',
    category: 'general',
  },
  {
    id: 'faq-5',
    questionKey: 'What is your pricing structure?',
    answerKey: 'Pricing varies based on project scope, complexity, and timeline. I offer both fixed-price projects and hourly consulting. Contact me for a personalized quote tailored to your specific needs.',
    category: 'pricing',
  },
  {
    id: 'faq-6',
    questionKey: 'Do you provide ongoing support?',
    answerKey: 'Yes, I offer maintenance and support packages for projects I develop. This includes bug fixes, security updates, and minor feature enhancements to ensure your application stays current.',
    category: 'services',
  },
  {
    id: 'faq-7',
    questionKey: 'How do you handle project communication?',
    answerKey: 'I maintain clear communication through regular updates, scheduled calls, and project management tools. You will always know the status of your project and can reach me easily for any questions.',
    category: 'process',
  },
  {
    id: 'faq-8',
    questionKey: 'Can you work with existing codebases?',
    answerKey: 'Absolutely. I have extensive experience working with legacy systems, performing code audits, refactoring, and implementing new features in existing projects while maintaining code quality.',
    category: 'services',
  },
];

export function getFAQByCategory(category: string): FAQItem[] {
  if (category === 'all') return faqItems;
  return faqItems.filter((item) => item.category === category);
}