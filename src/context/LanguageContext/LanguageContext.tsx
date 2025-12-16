import { createContext } from 'react';
import type { LanguageCode, Language, TextDirection } from '@/i18n';

export interface LanguageContextValue {
  currentLanguage: LanguageCode;
  language: Language;
  direction: TextDirection;
  isRTL: boolean;
  setLanguage: (code: LanguageCode) => void;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);