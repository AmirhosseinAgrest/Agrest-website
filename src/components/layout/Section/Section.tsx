import { forwardRef, type ElementType } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../Container';
import type { SectionProps } from './Section.types';

const spacingStyles: Record<string, string> = {
  none: 'py-0',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 md:py-20',
  lg: 'py-16 sm:py-20 md:py-24 lg:py-28',
  xl: 'py-20 sm:py-24 md:py-32 lg:py-40',
  '2xl': 'py-24 sm:py-32 md:py-40 lg:py-48',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      as = 'section',
      containerSize = 'xl',
      spacing = 'lg',
      noContainer = false,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const Tag = as as ElementType;

    return (
      <Tag
        ref={ref}
        className={cn('relative', spacingStyles[spacing], className)}
        {...props}
      >
        {noContainer ? (
          children
        ) : (
          <Container size={containerSize} className={containerClassName}>
            {children}
          </Container>
        )}
      </Tag>
    );
  }
);

Section.displayName = 'Section';

export default Section;