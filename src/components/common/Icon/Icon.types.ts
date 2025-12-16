import type { SVGProps } from 'react';

export type IconName =
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up-right'
  | 'external-link'
  | 'download'
  | 'copy'
  | 'check'
  | 'plus'
  | 'minus'
  | 'search'
  | 'filter'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'instagram'
  | 'email'
  | 'telegram'
  | 'sun'
  | 'moon'
  | 'globe'
  | 'calendar'
  | 'clock'
  | 'location'
  | 'phone'
  | 'star'
  | 'heart'
  | 'bookmark'
  | 'share'
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'code'
  | 'terminal'
  | 'palette'
  | 'layers'
  | 'grid'
  | 'list'
  | 'quote';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: IconSize;
  className?: string;
  color?: string;
}