import { forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import type { ImageProps } from './Image.types';
const aspectRatioStyles: Record<string, string> = {
  auto: '',
  square: 'aspect-square',
  video: 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '2/3': 'aspect-[2/3]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '21/9': 'aspect-[21/9]',
};

const fitStyles: Record<string, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

const radiusStyles: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      aspectRatio = 'auto',
      fit = 'cover',
      radius = 'none',
      fallbackSrc,
      showSkeleton = true,
      overlay = false,
      overlayColor,
      eager = false,
      blurDataURL,
      containerClassName,
      className,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);
    const imgRef = useRef<HTMLImageElement>(null);

    const setRefs = (element: HTMLImageElement | null) => {
      (imgRef as React.MutableRefObject<HTMLImageElement | null>).current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    useEffect(() => {
      setIsLoading(true);
      setHasError(false);
      setCurrentSrc(src);
    }, [src]);

    useEffect(() => {
      if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
        setIsLoading(false);
      }
    }, []);

    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        setHasError(false);
        setIsLoading(true);
      }
      onError?.();
    };

    return (
      <div
        className={cn(
          'relative overflow-hidden',
          aspectRatioStyles[aspectRatio],
          radiusStyles[radius],
          containerClassName
        )}
      >
        {showSkeleton && isLoading && (
          <div
            className={cn(
              'absolute inset-0 bg-neutral-800',
              'animate-pulse',
              radiusStyles[radius]
            )}
          />
        )}

        {blurDataURL && isLoading && (
          <img
            src={blurDataURL}
            alt=""
            aria-hidden="true"
            className={cn(
              'absolute inset-0 w-full h-full',
              fitStyles[fit],
              'blur-lg scale-110',
              radiusStyles[radius]
            )}
          />
        )}

        <img
          ref={setRefs}
          src={currentSrc}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            fitStyles[fit],
            isLoading ? 'opacity-0' : 'opacity-100',
            hasError && !fallbackSrc && 'hidden',
            className
          )}
          {...props}
        />

        {overlay && !isLoading && !hasError && (
          <div
            className={cn(
              'absolute inset-0 pointer-events-none',
              !overlayColor &&
                'bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent'
            )}
            style={overlayColor ? { backgroundColor: overlayColor } : undefined}
          />
        )}

        {hasError && !fallbackSrc && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              'bg-neutral-900 text-neutral-500',
              radiusStyles[radius]
            )}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';

export default Image;