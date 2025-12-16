import { forwardRef, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardImageProps,
  CardVariant,
} from './Card.types';
const CardContext = createContext<{ variant: CardVariant }>({
  variant: 'default',
});
const variantStyles: Record<CardVariant, string> = {
  default: 'bg-neutral-900/50 border border-neutral-800',
  elevated: 'bg-neutral-900 shadow-soft-lg border border-neutral-800/50',
  outlined: 'bg-transparent border border-neutral-700',
  ghost: 'bg-transparent border-none',
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  gradient: 'bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800',
};

const hoverStyles: Record<CardVariant, string> = {
  default: 'hover:bg-neutral-900/80 hover:border-neutral-700',
  elevated: 'hover:shadow-soft-xl hover:-translate-y-1',
  outlined: 'hover:border-neutral-600 hover:bg-white/[0.02]',
  ghost: 'hover:bg-white/5',
  glass: 'hover:bg-white/10 hover:border-white/20',
  gradient: 'hover:border-neutral-700',
};

const paddingStyles: Record<string, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4 sm:p-5',
  lg: 'p-5 sm:p-6',
  xl: 'p-6 sm:p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      hoverable = false,
      clickable = false,
      square = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <CardContext.Provider value={{ variant }}>
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden transition-all duration-300',
            variantStyles[variant],
            paddingStyles[padding],
            !square && 'rounded-2xl',
            hoverable && hoverStyles[variant],
            clickable && 'cursor-pointer',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, description, action, avatar, className, children }, ref) => {
    if (children) {
      return (
        <div ref={ref} className={cn('mb-4', className)}>
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-start gap-4 mb-4', className)}
      >
        {avatar && <div className="shrink-0">{avatar}</div>}

        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="text-lg font-semibold text-white truncate">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-neutral-400 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('text-neutral-300', className)}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

const footerAlignStyles: Record<string, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
  between: 'justify-between',
};

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, align = 'left', bordered = false, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-3 mt-4 pt-4',
          bordered && 'border-t border-neutral-800',
          footerAlignStyles[align],
          className
        )}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

const aspectRatioStyles: Record<string, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '2/3': 'aspect-[2/3]',
};

export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt, aspectRatio = '16/9', overlay = false, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden -mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4',
          aspectRatioStyles[aspectRatio],
          className
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
        )}
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';

export const useCardContext = () => useContext(CardContext);

export default Card;