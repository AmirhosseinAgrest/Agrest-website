import type { ReactNode, ElementType } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingSize = 
  | 'display' 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6';


export interface HeadingProps {
  children: ReactNode;
  as?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
  balance?: boolean;
  id?: string;
}

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export type TextColor = 
  | 'default' 
  | 'muted' 
  | 'subtle' 
  | 'inverse' 
  | 'primary' 
  | 'success' 
  | 'warning' 
  | 'error';

export interface TextProps {
  children: ReactNode;
  as?: ElementType;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  className?: string;
  align?: 'left' | 'center' | 'right';
  leading?: 'none' | 'tight' | 'normal' | 'relaxed' | 'loose';
  italic?: boolean;
  truncate?: boolean;
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
}

export type LabelSize = 'xs' | 'sm' | 'base';
export interface LabelProps {
  children: ReactNode;
  size?: LabelSize;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
}