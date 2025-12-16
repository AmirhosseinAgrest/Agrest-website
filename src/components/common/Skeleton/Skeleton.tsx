import { forwardRef, memo } from 'react';
import { cn } from '@/lib/utils';
import type {
  SkeletonProps,
  SkeletonTextProps,
  SkeletonAvatarProps,
  SkeletonCardProps,
} from './Skeleton.types';
const animationStyles: Record<string, string> = {
  pulse: 'animate-pulse',
  shimmer: `
    relative overflow-hidden
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-transparent 
    before:via-white/10 before:to-transparent
    before:animate-shimmer
  `,
  none: '',
};
const variantStyles: Record<string, string> = {
  text: 'rounded-md',
  circular: 'rounded-full',
  rectangular: 'rounded-none',
  rounded: 'rounded-xl',
};

export const Skeleton = memo(
  forwardRef<HTMLDivElement, SkeletonProps>(
    (
      {
        variant = 'rectangular',
        animation = 'pulse',
        width,
        height,
        borderRadius,
        lines = 1,
        spacing = 8,
        className,
      },
      ref
    ) => {
      if (variant === 'text' && lines > 1) {
        return (
          <div
            ref={ref}
            className={cn('flex flex-col', className)}
            style={{ gap: spacing }}
          >
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  'bg-neutral-800',
                  animationStyles[animation],
                  variantStyles[variant],
                  index === lines - 1 ? 'w-3/4' : 'w-full'
                )}
                style={{
                  height: height || 16,
                  animationDelay: `${index * 100}ms`,
                }}
              />
            ))}
          </div>
        );
      }

      return (
        <div
          ref={ref}
          className={cn(
            'bg-neutral-800',
            animationStyles[animation],
            variantStyles[variant],
            className
          )}
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            borderRadius:
              typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
          }}
        />
      );
    }
  )
);

Skeleton.displayName = 'Skeleton';

const spacingValues: Record<string, number> = {
  sm: 6,
  md: 8,
  lg: 12,
};

export const SkeletonText = memo(
  forwardRef<HTMLDivElement, SkeletonTextProps>(
    (
      {
        lines = 3,
        spacing = 'md',
        animation = 'pulse',
        lastLineWidth = '60%',
        className,
      },
      ref
    ) => {
      return (
        <div
          ref={ref}
          className={cn('flex flex-col', className)}
          style={{ gap: spacingValues[spacing] }}
        >
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-4 bg-neutral-800 rounded-md',
                animationStyles[animation]
              )}
              style={{
                width: index === lines - 1 ? lastLineWidth : '100%',
                animationDelay: `${index * 75}ms`,
              }}
            />
          ))}
        </div>
      );
    }
  )
);

SkeletonText.displayName = 'SkeletonText';

const avatarSizes: Record<string, number> = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export const SkeletonAvatar = memo(
  forwardRef<HTMLDivElement, SkeletonAvatarProps>(
    ({ size = 'md', animation = 'pulse', className }, ref) => {
      const sizeValue = typeof size === 'number' ? size : avatarSizes[size];

      return (
        <div
          ref={ref}
          className={cn(
            'bg-neutral-800 rounded-full shrink-0',
            animationStyles[animation],
            className
          )}
          style={{
            width: sizeValue,
            height: sizeValue,
          }}
        />
      );
    }
  )
);

SkeletonAvatar.displayName = 'SkeletonAvatar';

const imageAspects: Record<string, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  '4/3': 'aspect-[4/3]',
};

export const SkeletonCard = memo(
  forwardRef<HTMLDivElement, SkeletonCardProps>(
    (
      {
        hasImage = true,
        imageAspect = 'video',
        lines = 3,
        hasAvatar = false,
        animation = 'pulse',
        className,
      },
      ref
    ) => {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden',
            className
          )}
        >
          {hasImage && (
            <div
              className={cn(
                'bg-neutral-800',
                animationStyles[animation],
                imageAspects[imageAspect]
              )}
            />
          )}

          <div className="p-4 sm:p-5">
            {hasAvatar && (
              <div className="flex items-center gap-3 mb-4">
                <SkeletonAvatar size="md" animation={animation} />
                <div className="flex-1">
                  <Skeleton
                    variant="text"
                    animation={animation}
                    width="60%"
                    height={14}
                    className="mb-2"
                  />
                  <Skeleton
                    variant="text"
                    animation={animation}
                    width="40%"
                    height={12}
                  />
                </div>
              </div>
            )}

            <Skeleton
              variant="text"
              animation={animation}
              width="80%"
              height={20}
              className="mb-3"
            />

            <SkeletonText lines={lines} animation={animation} />

            <div className="flex gap-2 mt-4">
              <Skeleton
                variant="rounded"
                animation={animation}
                width={80}
                height={36}
              />
              <Skeleton
                variant="rounded"
                animation={animation}
                width={80}
                height={36}
              />
            </div>
          </div>
        </div>
      );
    }
  )
);

SkeletonCard.displayName = 'SkeletonCard';

export default Skeleton;