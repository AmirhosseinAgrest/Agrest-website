import type { TextareaHTMLAttributes } from 'react';

export type TextAreaVariant = 'default' | 'filled' | 'flushed';
export type TextAreaResize = 'none' | 'vertical' | 'horizontal' | 'both';
export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
  variant?: TextAreaVariant;
  label?: string;
  helperText?: string;
  error?: string;
  rows?: number;
  minHeight?: number;
  maxHeight?: number;
  resize?: TextAreaResize;
  showCount?: boolean;
  maxLength?: number;
  fullWidth?: boolean;
  required?: boolean;
  containerClassName?: string;
  className?: string;
}