export type LanguageSwitcherVariant = 'dropdown' | 'buttons' | 'minimal';
export type LanguageSwitcherSize = 'sm' | 'md' | 'lg';

export interface LanguageSwitcherProps {
  variant?: LanguageSwitcherVariant;
  size?: LanguageSwitcherSize;
  showFlag?: boolean;
  showName?: boolean;
  showNativeName?: boolean;
  className?: string;
}