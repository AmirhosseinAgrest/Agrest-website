import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export type Children = ReactNode;

export type ClassName = string | undefined;

export interface PropsWithChildren {
  children?: Children;
}

export interface PropsWithClassName {
  className?: ClassName;
}

export interface BaseComponentProps extends PropsWithChildren, PropsWithClassName {}

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object,
> = AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AsProp<C> | keyof Props> &
  Props;

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type StyleVariant = 'solid' | 'outline' | 'ghost' | 'link';

export interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface MetaData {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
}

export type LanguageCode = 'en' | 'fa' | 'fr';

export type TextDirection = 'ltr' | 'rtl';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: TextDirection;
  flag?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'email' | 'website';
  url: string;
  label: string;
}

export interface FieldState {
  value: string;
  error?: string;
  touched: boolean;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';