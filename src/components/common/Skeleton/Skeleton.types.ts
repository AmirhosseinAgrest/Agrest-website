
export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export type SkeletonAnimation = 'pulse' | 'shimmer' | 'none';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  lines?: number;
  spacing?: number;
  className?: string;
}

export interface SkeletonTextProps {
  lines?: number;
  spacing?: 'sm' | 'md' | 'lg';
  animation?: SkeletonAnimation;
  lastLineWidth?: string;
  className?: string;
}
export interface SkeletonAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  animation?: SkeletonAnimation;
  className?: string;
}
export interface SkeletonCardProps {
  hasImage?: boolean;
  imageAspect?: 'video' | 'square' | '4/3';
  lines?: number;
  hasAvatar?: boolean;
  animation?: SkeletonAnimation;
  className?: string;
}