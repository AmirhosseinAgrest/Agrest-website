import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { LabelProps } from './Typography.types';

const sizeStyles: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      size = 'sm',
      className,
      required = false,
      disabled = false,
      htmlFor,
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn(
          'inline-block font-medium text-neutral-200',
          sizeStyles[size],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {children}
        {required && (
          <span className="ml-1 text-rose-400" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;