import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { IconName } from '../Icon';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'link'
  | 'danger';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconOnly?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  className?: string;
}