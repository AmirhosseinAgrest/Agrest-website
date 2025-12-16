export type LanguageCode =
  | 'en'
  | 'fa'
  | 'fr'
  | 'zh'
  | 'es'
  | 'ar'
  | 'de'
  | 'ja'
  | 'ko'
  | 'pt';

export type TextDirection = 'ltr' | 'rtl';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: TextDirection;
  flag: string;
  dateFormat: string;
  fontFamily: string;
}

export const languages: Record<LanguageCode, Language> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇺🇸',
    dateFormat: 'MM/DD/YYYY',
    fontFamily: 'Inter',
  },
  fa: {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    direction: 'rtl',
    flag: '🇮🇷',
    dateFormat: 'YYYY/MM/DD',
    fontFamily: 'Vazirmatn',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    flag: '🇫🇷',
    dateFormat: 'DD/MM/YYYY',
    fontFamily: 'Inter',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    direction: 'ltr',
    flag: '🇨🇳',
    dateFormat: 'YYYY/MM/DD',
    fontFamily: 'Noto Sans SC',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    flag: '🇪🇸',
    dateFormat: 'DD/MM/YYYY',
    fontFamily: 'Inter',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇸🇦',
    dateFormat: 'DD/MM/YYYY',
    fontFamily: 'Vazirmatn',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    flag: '🇩🇪',
    dateFormat: 'DD.MM.YYYY',
    fontFamily: 'Inter',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    direction: 'ltr',
    flag: '🇯🇵',
    dateFormat: 'YYYY/MM/DD',
    fontFamily: 'Noto Sans JP',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
    flag: '🇰🇷',
    dateFormat: 'YYYY.MM.DD',
    fontFamily: 'Noto Sans KR',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    direction: 'ltr',
    flag: '🇵🇹',
    dateFormat: 'DD/MM/YYYY',
    fontFamily: 'Inter',
  },
};

export const defaultLanguage: LanguageCode = 'en';

export const supportedLanguages: LanguageCode[] = [
  'en', // English
  'fa', // Persian
  'fr', // French
  'zh', // Chinese (Simplified)
  'es', // Spanish
  'ar', // Arabic
  'de', // German
  'ja', // Japanese
  'ko', // Korean
  'pt', // Portuguese
];

export const rtlLanguages: LanguageCode[] = [
  'fa', // Persian
  'ar', // Arabic
];

export function isRTLLanguage(code: LanguageCode): boolean {
  return rtlLanguages.includes(code);
}

export function getLanguage(code: string): Language {
  if (code in languages) {
    return languages[code as LanguageCode];
  }
  return languages[defaultLanguage];
}

export function getDirection(code: LanguageCode): TextDirection {
  return languages[code]?.direction || 'ltr';
}