import type { ReactNode, HTMLAttributes } from 'react';

export type CardVariant = 
  | 'default' 
  | 'elevated' 
  | 'outlined' 
  | 'ghost' 
  | 'glass'
  | 'gradient';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  clickable?: boolean;
  square?: boolean;
  className?: string;
}

export interface CardHeaderProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  avatar?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'between';
  bordered?: boolean;
  className?: string;
}

export interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | '2/3';
  overlay?: boolean;
  className?: string;
}