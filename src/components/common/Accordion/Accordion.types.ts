import type { ReactNode } from 'react';

export interface AccordionItemData {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  type?: 'single' | 'multiple';
  defaultOpenIds?: string[];
  className?: string;
}

export interface AccordionItemProps {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}