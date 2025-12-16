import type { ReactNode, HTMLAttributes } from 'react';
import type { IconName } from '../Icon';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';


export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  dot?: boolean;
  dotColor?: string;
  rounded?: boolean;
}