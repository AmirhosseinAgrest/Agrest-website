import { forwardRef, memo } from 'react';
import { cn } from '@/lib/utils';
import { iconPaths } from './icons';
import type { IconProps } from './Icon.types';
const sizeStyles: Record<string, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
};

const filledIcons = ['github', 'linkedin', 'twitter', 'instagram'];

export const Icon = memo(
  forwardRef<SVGSVGElement, IconProps>(
    ({ name, size = 'md', className, color, ...props }, ref) => {
      const path = iconPaths[name];

      if (!path) {
        console.warn(`Icon "${name}" not found`);
        return null;
      }

      const isFilled = filledIcons.includes(name);

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFilled ? 'currentColor' : 'none'}
          stroke={isFilled ? 'none' : 'currentColor'}
          strokeWidth={isFilled ? 0 : 1.5}
          aria-hidden="true"
          className={cn(
            sizeStyles[size],
            'text-current',
            'shrink-0',
            className
          )}
          style={color ? { color } : undefined}
          {...props}
        >
          {path}
        </svg>
      );
    }
  )
);

Icon.displayName = 'Icon';

export default Icon;