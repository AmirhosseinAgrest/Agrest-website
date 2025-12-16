import type { ReactNode, AnchorHTMLAttributes } from 'react';
import type { IconName } from '../Icon';

export type LinkVariant = 'default' | 'muted' | 'primary' | 'underline' | 'ghost';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
  variant?: LinkVariant;
  leftIcon?: IconName;
  rightIcon?: IconName;
  showExternalIcon?: boolean;
  external?: boolean;
  disabled?: boolean;
  className?: string;
}