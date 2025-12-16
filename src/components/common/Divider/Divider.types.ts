import type { ReactNode } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';

export type DividerVariant = 'solid' | 'dashed' | 'dotted' | 'gradient';

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  children?: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}