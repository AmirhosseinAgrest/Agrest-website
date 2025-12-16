import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
import type { BadgeProps } from './Badge.types';

const baseStyles = `
  inline-flex items-center gap-1.5
  font-medium
  transition-colors duration-200
`;

const variantStyles: Record<string, string> = {
  default: 'bg-white/5 text-neutral-300 ring-1 ring-white/10',
  primary: 'bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20',
  success: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20',
  error: 'bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20',
  info: 'bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20',
  outline: 'bg-transparent text-neutral-300 ring-1 ring-neutral-700',
};
const sizeStyles: Record<string, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

const dotColors: Record<string, string> = {
  default: 'bg-neutral-400',
  primary: 'bg-brand-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  error: 'bg-rose-400',
  info: 'bg-blue-400',
  outline: 'bg-neutral-400',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      leftIcon,
      rightIcon,
      dot = false,
      dotColor,
      rounded = true,
      className,
    },
    ref
  ) => {
    const iconSize = size === 'lg' ? 'sm' : 'xs';

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          rounded ? 'rounded-full' : 'rounded-md',
          className
        )}
      >
        {dot && (
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              dotColor || dotColors[variant]
            )}
            style={dotColor ? { backgroundColor: dotColor } : undefined}
          />
        )}

        {leftIcon && <Icon name={leftIcon} size={iconSize} />}

        {children}

        {rightIcon && <Icon name={rightIcon} size={iconSize} />}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;