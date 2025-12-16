

import { forwardRef, useId, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '../Typography';
import type { TextAreaProps } from './TextArea.types';
const baseStyles = `
  w-full
  bg-transparent
  text-white
  placeholder:text-neutral-500
  transition-all duration-200
  focus:outline-none
  disabled:opacity-50 disabled:cursor-not-allowed
`;
const variantStyles: Record<string, string> = {
  default: `
    bg-neutral-900/50 
    border border-neutral-800 
    rounded-xl
    focus:border-brand-500 
    focus:ring-1 focus:ring-brand-500/50
  `,
  filled: `
    bg-neutral-800/50 
    border border-transparent 
    rounded-xl
    focus:bg-neutral-800 
    focus:border-neutral-700
  `,
  flushed: `
    bg-transparent 
    border-b border-neutral-700 
    rounded-none px-0
    focus:border-brand-500
  `,
};
const errorStyles: Record<string, string> = {
  default: 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/50',
  filled: 'border-rose-500/50 focus:border-rose-500',
  flushed: 'border-rose-500/50 focus:border-rose-500',
};
const resizeStyles: Record<string, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = 'default',
      label,
      helperText,
      error,
      rows = 4,
      minHeight,
      maxHeight,
      resize = 'vertical',
      showCount = false,
      maxLength,
      fullWidth = true,
      required = false,
      disabled = false,
      containerClassName,
      className,
      id: providedId,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = providedId || generatedId;
    const [charCount, setCharCount] = useState(0);
    const internalRef = useRef<HTMLTextAreaElement>(null);

    const hasError = Boolean(error);

    useEffect(() => {
      const currentValue = value?.toString() || defaultValue?.toString() || '';
      setCharCount(currentValue.length);
    }, [value, defaultValue]);

    const setRefs = (element: HTMLTextAreaElement | null) => {
      (internalRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;

      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div
        className={cn(
          'flex flex-col gap-1.5',
          fullWidth && 'w-full',
          containerClassName
        )}
      >
        {label && (
          <Label htmlFor={textareaId} required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <textarea
          ref={setRefs}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={cn(
            baseStyles,
            'px-4 py-3 text-sm leading-relaxed',
            variantStyles[variant],
            resizeStyles[resize],
            hasError && errorStyles[variant],
            className
          )}
          style={{
            minHeight: minHeight ? `${minHeight}px` : undefined,
            maxHeight: maxHeight ? `${maxHeight}px` : undefined,
          }}
          {...props}
        />

        <div className="flex items-center justify-between gap-2">
          {(error || helperText) && (
            <p
              id={error ? `${textareaId}-error` : `${textareaId}-helper`}
              className={cn(
                'text-xs',
                error ? 'text-rose-400' : 'text-neutral-500'
              )}
            >
              {error || helperText}
            </p>
          )}

          {showCount && (
            <p
              className={cn(
                'text-xs text-neutral-500 ml-auto',
                maxLength && charCount >= maxLength && 'text-rose-400'
              )}
            >
              {charCount}
              {maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;