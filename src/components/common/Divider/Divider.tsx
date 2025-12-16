import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { DividerProps } from './Divider.types';

const variantStyles: Record<string, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  gradient: 'border-0 bg-gradient-to-r from-transparent via-neutral-700 to-transparent',
};

const spacingStyles: Record<string, string> = {
  sm: 'my-2',
  md: 'my-4',
  lg: 'my-6',
  xl: 'my-8',
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'solid',
      children,
      spacing = 'md',
      color,
      className,
    },
    ref
  ) => {
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn(
            'inline-block w-px self-stretch',
            variant === 'gradient'
              ? 'bg-gradient-to-b from-transparent via-neutral-700 to-transparent'
              : 'border-l border-neutral-800',
            variantStyles[variant],
            className
          )}
          style={color ? { borderColor: color } : undefined}
        />
      );
    }

    if (children) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="horizontal"
          className={cn(
            'flex items-center gap-4',
            spacingStyles[spacing],
            className
          )}
        >
          <div
            className={cn(
              'h-px flex-1',
              variant === 'gradient'
                ? 'bg-gradient-to-r from-transparent to-neutral-700'
                : 'border-t border-neutral-800',
              variantStyles[variant]
            )}
            style={color ? { borderColor: color } : undefined}
          />

          <span className="text-sm text-neutral-500 shrink-0">{children}</span>

          <div
            className={cn(
              'h-px flex-1',
              variant === 'gradient'
                ? 'bg-gradient-to-r from-neutral-700 to-transparent'
                : 'border-t border-neutral-800',
              variantStyles[variant]
            )}
            style={color ? { borderColor: color } : undefined}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          variant === 'gradient' ? 'h-px' : 'h-0 border-t border-neutral-800',
          variantStyles[variant],
          spacingStyles[spacing],
          className
        )}
        style={color ? { borderColor: color } : undefined}
      />
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;