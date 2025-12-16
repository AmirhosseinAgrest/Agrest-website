
import { forwardRef, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { isExternalLink } from '@/lib/utils';
import { Icon } from '../Icon';
import type { LinkProps } from './Link.types';

const variantStyles: Record<string, string> = {
  default: `
    text-neutral-200 
    hover:text-white
    transition-colors duration-200
  `,
  muted: `
    text-neutral-400 
    hover:text-neutral-200
    transition-colors duration-200
  `,
  primary: `
    text-brand-400 
    hover:text-brand-300
    transition-colors duration-200
  `,
  underline: `
    text-neutral-200
    hover:text-white
    underline underline-offset-4
    decoration-neutral-700 hover:decoration-neutral-400
    transition-all duration-200
  `,
  ghost: `
    text-neutral-400
    hover:text-white hover:bg-white/5
    px-2 py-1 -mx-2 -my-1 rounded-lg
    transition-all duration-200
  `,
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      children,
      variant = 'default',
      leftIcon,
      rightIcon,
      showExternalIcon = true,
      external,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const isExternal = useMemo(() => {
      if (external !== undefined) return external;
      return isExternalLink(href);
    }, [href, external]);

    const sharedProps = {
      className: cn(
        'inline-flex items-center gap-1.5',
        variantStyles[variant],
        disabled && 'opacity-50 pointer-events-none cursor-not-allowed',
        className
      ),
      'aria-disabled': disabled,
    };

    const content = (
      <>
        {leftIcon && <Icon name={leftIcon} size="sm" />}
        {children}
        {rightIcon && <Icon name={rightIcon} size="sm" />}
        {isExternal && showExternalIcon && !rightIcon && (
          <Icon name="arrow-up-right" size="xs" className="opacity-60" />
        )}
      </>
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={disabled ? undefined : href}
          target="_blank"
          rel="noopener noreferrer"
          {...sharedProps}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <RouterLink
        ref={ref}
        to={disabled ? '#' : href}
        {...sharedProps}
        {...props}
      >
        {content}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;