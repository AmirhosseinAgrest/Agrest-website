import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { HeadingProps, HeadingLevel } from './Typography.types';


const sizeStyles: Record<string, string> = {
  display: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter',
  h1: 'text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight',
  h2: 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight',
  h3: 'text-2xl sm:text-3xl font-semibold tracking-tight',
  h4: 'text-xl sm:text-2xl font-semibold tracking-tight',
  h5: 'text-lg sm:text-xl font-semibold',
  h6: 'text-base sm:text-lg font-semibold',
};

const alignStyles: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      as = 'h2',
      size,
      className,
      gradient = false,
      align = 'left',
      balance = true,
      id,
    },
    ref
  ) => {
    const visualSize = size || as;

    const Tag = as as HeadingLevel;

    return (
      <Tag
        ref={ref}
        id={id}
        className={cn(
          'text-white',
          sizeStyles[visualSize],
          alignStyles[align],
          balance && 'text-balance',
          gradient && 'text-gradient',
          className
        )}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;