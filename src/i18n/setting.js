import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import TranslationEn from './resource/en.json';
import TranslationKo from './resource/ko.json';

const resources = {
  en: {
    translation: TranslationEn,
  },
  ko: {
    translation: TranslationKo,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
