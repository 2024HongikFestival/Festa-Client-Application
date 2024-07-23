import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import TranslationEn from "./resource/en.json";
import TranslationKo from "./resource/ko.json";

const resource = {
  en: {
    translations: TranslationEn,
  },
  ko: {
    translations: TranslationKo,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: "v3",
    lng: "ko",
    resources: resource,
    ns: ["translations"],
    fallbackLng: "ko", // 대체 언어
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
