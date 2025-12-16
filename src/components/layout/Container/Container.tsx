import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ContainerProps } from './Container.types';

const sizeStyles: Record<string, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-8xl',
  full: 'max-w-none',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'xl', padding = true, centered = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          sizeStyles[size],
          padding && 'px-4 sm:px-6 lg:px-8',
          centered && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;