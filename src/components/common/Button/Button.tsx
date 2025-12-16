import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
import type { ButtonProps } from './Button.types';

const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-medium
  transition-all duration-300 ease-out-soft
  focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-brand-500 focus-visible:ring-offset-2
  focus-visible:ring-offset-neutral-950
  disabled:opacity-50 disabled:pointer-events-none
  active:scale-[0.98]
`;

const variantStyles: Record<string, string> = {
  primary: `
    bg-white text-neutral-950
    hover:bg-neutral-100
    shadow-soft-sm hover:shadow-soft
  `,
  secondary: `
    bg-neutral-800 text-white
    hover:bg-neutral-700
    border border-neutral-700
  `,
  outline: `
    bg-transparent text-white
    border border-neutral-700
    hover:bg-white/5 hover:border-neutral-600
  `,
  ghost: `
    bg-transparent text-neutral-300
    hover:bg-white/5 hover:text-white
  `,
  link: `
    bg-transparent text-neutral-300
    hover:text-white
    underline-offset-4 hover:underline
    p-0 h-auto
  `,
  danger: `
    bg-rose-500/10 text-rose-400
    border border-rose-500/20
    hover:bg-rose-500/20 hover:border-rose-500/30
  `,
};

const sizeStyles: Record<string, string> = {
  xs: 'h-7 px-2.5 text-xs rounded-md',
  sm: 'h-8 px-3 text-sm rounded-lg',
  md: 'h-10 px-4 text-sm rounded-lg',
  lg: 'h-12 px-6 text-base rounded-xl',
  xl: 'h-14 px-8 text-lg rounded-xl',
};


const iconOnlyStyles: Record<string, string> = {
  xs: 'h-7 w-7 p-0',
  sm: 'h-8 w-8 p-0',
  md: 'h-10 w-10 p-0',
  lg: 'h-12 w-12 p-0',
  xl: 'h-14 w-14 p-0',
};

const iconSizes: Record<string, 'xs' | 'sm' | 'md' | 'lg'> = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
  xl: 'md',
};

const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      iconOnly = false,
      isLoading = false,
      loadingText,
      fullWidth = false,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const iconSize = iconSizes[size];
    const spinnerSize = size === 'xs' || size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          iconOnly ? iconOnlyStyles[size] : sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && <Spinner className={spinnerSize} />}

        {!isLoading && leftIcon && (
          <Icon name={leftIcon} size={iconSize} className="shrink-0" />
        )}

        {isLoading && loadingText ? (
          loadingText
        ) : iconOnly ? null : (
          <span className={isLoading && !loadingText ? 'opacity-0' : ''}>
            {children}
          </span>
        )}

        {!isLoading && rightIcon && (
          <Icon name={rightIcon} size={iconSize} className="shrink-0" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;