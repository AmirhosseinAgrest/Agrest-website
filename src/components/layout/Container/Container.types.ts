import type { ReactNode, HTMLAttributes } from 'react';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
  padding?: boolean;
  centered?: boolean;
  className?: string;
}