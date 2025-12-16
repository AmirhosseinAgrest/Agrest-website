import type { InputHTMLAttributes, ReactNode } from 'react';
import type { IconName } from '../Icon';
export type InputVariant = 'default' | 'filled' | 'flushed';
export type InputSize = 'sm' | 'md' | 'lg';
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  containerClassName?: string;
  className?: string;
}