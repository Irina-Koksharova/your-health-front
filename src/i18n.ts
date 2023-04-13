import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import languages from "../src/data/languages.json" assert { type: "json" };
import resources from "../src/resources/resources";

const fallback = languages[0].lang;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: fallback,
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export default i18n;
