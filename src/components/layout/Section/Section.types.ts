import type { ReactNode, HTMLAttributes } from 'react';
import type { ContainerSize } from '../Container';

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'section' | 'div' | 'article' | 'aside';
  containerSize?: ContainerSize;
  spacing?: SectionSpacing;
  noContainer?: boolean;
  className?: string;
  containerClassName?: string;
}