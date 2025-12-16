
import { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
import { Label } from '../Typography';
import type { InputProps } from './Input.types';

const baseStyles = `
  w-full
  bg-transparent
  text-white
  placeholder:text-neutral-500
  transition-all duration-200
  focus:outline-none
  disabled:opacity-50 disabled:cursor-not-allowed
`;

const variantWrapperStyles: Record<string, string> = {
  default: `
    bg-neutral-900/50 
    border border-neutral-800 
    rounded-xl
    focus-within:border-brand-500 
    focus-within:ring-1 focus-within:ring-brand-500/50
  `,
  filled: `
    bg-neutral-800/50 
    border border-transparent 
    rounded-xl
    focus-within:bg-neutral-800 
    focus-within:border-neutral-700
  `,
  flushed: `
    bg-transparent 
    border-b border-neutral-700 
    rounded-none
    focus-within:border-brand-500
  `,
};

const errorWrapperStyles: Record<string, string> = {
  default: 'border-rose-500/50 focus-within:border-rose-500 focus-within:ring-rose-500/50',
  filled: 'border-rose-500/50 focus-within:border-rose-500',
  flushed: 'border-rose-500/50 focus-within:border-rose-500',
};

const sizeStyles: Record<string, { wrapper: string; input: string; icon: string }> = {
  sm: {
    wrapper: 'h-9',
    input: 'px-3 text-sm',
    icon: 'w-4 h-4',
  },
  md: {
    wrapper: 'h-11',
    input: 'px-4 text-sm',
    icon: 'w-5 h-5',
  },
  lg: {
    wrapper: 'h-13',
    input: 'px-5 text-base',
    icon: 'w-5 h-5',
  },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      leftElement,
      rightElement,
      fullWidth = true,
      required = false,
      disabled = false,
      containerClassName,
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = providedId || generatedId;

    const sizeConfig = sizeStyles[size];
    const hasError = Boolean(error);
    const hasLeftContent = leftIcon || leftElement;
    const hasRightContent = rightIcon || rightElement;

    return (
      <div
        className={cn(
          'flex flex-col gap-1.5',
          fullWidth && 'w-full',
          containerClassName
        )}
      >
        {label && (
          <Label htmlFor={inputId} required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <div
          className={cn(
            'relative flex items-center',
            variantWrapperStyles[variant],
            sizeConfig.wrapper,
            hasError && errorWrapperStyles[variant],
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {hasLeftContent && (
            <div
              className={cn(
                'flex items-center justify-center shrink-0 text-neutral-500',
                size === 'sm' ? 'pl-2.5' : size === 'lg' ? 'pl-4' : 'pl-3'
              )}
            >
              {leftElement || (leftIcon && <Icon name={leftIcon} className={sizeConfig.icon} />)}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={cn(
              baseStyles,
              sizeConfig.input,
              hasLeftContent && 'pl-2',
              hasRightContent && 'pr-2',
              className
            )}
            {...props}
          />

          {hasRightContent && (
            <div
              className={cn(
                'flex items-center justify-center shrink-0 text-neutral-500',
                size === 'sm' ? 'pr-2.5' : size === 'lg' ? 'pr-4' : 'pr-3'
              )}
            >
              {rightElement || (rightIcon && <Icon name={rightIcon} className={sizeConfig.icon} />)}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p
            id={error ? `${inputId}-error` : `${inputId}-helper`}
            className={cn(
              'text-xs',
              error ? 'text-rose-400' : 'text-neutral-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;