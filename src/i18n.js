import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const RTL_LANGUAGES = ["ar", "fa"];

// supported languages
const SUPPORTED_LANGUAGES = [
  "en",
  "fr",
  "es",
  "fa",
  "ar",
  "de",
  "ru",
];

// detect browser language
const browserLanguage =
  navigator.language?.split("-")[0] || "en";

// fallback to english if language not supported
const fallbackLanguage = SUPPORTED_LANGUAGES.includes(
  browserLanguage
)
  ? browserLanguage
  : "en";

// set initial direction
document.documentElement.dir = RTL_LANGUAGES.includes(
  fallbackLanguage
)
  ? "rtl"
  : "ltr";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    // initial language
    lng:
      localStorage.getItem("lang") ||
      fallbackLanguage,

    supportedLngs: SUPPORTED_LANGUAGES,

    debug: true,

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    ns: ["dekusms"],

    defaultNS: "dekusms",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },

    detection: {
      // order of detection
      order: [
        "localStorage",
        "navigator",
        "htmlTag",
      ],

      // where language is stored
      caches: ["localStorage"],

      lookupLocalStorage: "lang",
    },
  });

// update rtl/ltr automatically
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir =
    RTL_LANGUAGES.includes(lng)
      ? "rtl"
      : "ltr";
});

export default i18n;