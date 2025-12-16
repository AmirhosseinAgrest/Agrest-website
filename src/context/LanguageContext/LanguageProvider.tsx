import { useState, useEffect, useCallback, useMemo, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext, type LanguageContextValue } from './LanguageContext';
import {
  type LanguageCode,
  supportedLanguages,
  getLanguage,
  getDirection,
  isRTLLanguage,
} from '@/i18n';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(
    (i18n.language as LanguageCode) || 'en'
  );

  useEffect(() => {
    const lang = i18n.language as LanguageCode;
    if (supportedLanguages.includes(lang)) {
      setCurrentLanguage(lang);
    }
  }, [i18n.language]);

  useEffect(() => {
    const direction = getDirection(currentLanguage);
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage;
    
    if (isRTLLanguage(currentLanguage)) {
      document.documentElement.classList.add('rtl');
      document.documentElement.classList.remove('ltr');
    } else {
      document.documentElement.classList.add('ltr');
      document.documentElement.classList.remove('rtl');
    }

    const language = getLanguage(currentLanguage);
    document.documentElement.style.setProperty('--font-family', language.fontFamily);
  }, [currentLanguage]);

  const setLanguage = useCallback(
    async (code: LanguageCode) => {
      if (supportedLanguages.includes(code)) {
        await i18n.changeLanguage(code);
        setCurrentLanguage(code);
        localStorage.setItem('agrest-language', code);
      }
    },
    [i18n]
  );

  const toggleLanguage = useCallback(() => {
    const currentIndex = supportedLanguages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    setLanguage(supportedLanguages[nextIndex]);
  }, [currentLanguage, setLanguage]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      currentLanguage,
      language: getLanguage(currentLanguage),
      direction: getDirection(currentLanguage),
      isRTL: isRTLLanguage(currentLanguage),
      setLanguage,
      toggleLanguage,
    }),
    [currentLanguage, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;