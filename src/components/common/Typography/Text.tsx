import { forwardRef, type ElementType } from 'react';
import { cn } from '@/lib/utils';
import type { TextProps } from './Typography.types';

const sizeStyles: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

const weightStyles: Record<string, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};
const colorStyles: Record<string, string> = {
  default: 'text-neutral-200',
  muted: 'text-neutral-400',
  subtle: 'text-neutral-500',
  inverse: 'text-neutral-950',
  primary: 'text-brand-400',
  success: 'text-emerald-400',
  warning: 'text-amber-400',
  error: 'text-rose-400',
};

const alignStyles: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const leadingStyles: Record<string, string> = {
  none: 'leading-none',
  tight: 'leading-tight',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};

const lineClampStyles: Record<number, string> = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      as: Component = 'p',
      size = 'base',
      weight = 'normal',
      color = 'default',
      className,
      align,
      leading = 'relaxed',
      italic = false,
      truncate = false,
      lineClamp,
    },
    ref
  ) => {
    const Tag = Component as ElementType;

    return (
      <Tag
        ref={ref}
        className={cn(
          sizeStyles[size],
          weightStyles[weight],
          colorStyles[color],
          leadingStyles[leading],
          align && alignStyles[align],
          italic && 'italic',
          truncate && 'truncate',
          lineClamp && lineClampStyles[lineClamp],
          className
        )}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = 'Text';

export default Text;