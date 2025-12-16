import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { defaultLanguage, supportedLanguages } from './languages';

const isDev = import.meta.env.DEV;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    
    debug: isDev,
    
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'agrest-language',
    },

    react: {
      useSuspense: true,
    },

    returnNull: false,
    returnEmptyString: false,
  });

export default i18n;