import type { ImgHTMLAttributes } from 'react';
export type ImageAspectRatio =
  | 'auto'
  | 'square'
  | 'video'
  | '4/3'
  | '3/2'
  | '2/3'
  | '3/4'
  | '16/9'
  | '21/9';
export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  aspectRatio?: ImageAspectRatio;
  fit?: ImageFit;
  radius?: ImageRadius;
  fallbackSrc?: string;
  showSkeleton?: boolean;
  overlay?: boolean;
  overlayColor?: string;
  eager?: boolean;
  blurDataURL?: string;
  containerClassName?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}