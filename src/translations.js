import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        contact: "Contact",
        language: "Language",
        heroTitle: "Your Messages, <span> Reinvented </span>", 
        heroSubTitle1: "Privacy", 
        heroSubTitle2: "Control", 
        heroDescription: "Empower your communication with end-to-end encryption and complete cloud integration. Stay connected, securely.",
        playstore: "Playstore", 
        fdroid: "F-droid", 
      },
    },
    fr: {
      translation: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        language: "Langue",
        heroTitle: "Vos Messages, Réinventés ", 
        heroSubTitle1: "Confidentialité", 
        heroSubTitle2: "Contrôle",
        heroDescription: "Renforcez vos communications avec un chiffrement de bout en bout et une intégration complète dans le cloud. Restez connecté, en toute sécurité.",
        playstore: "Playstore", 
        fdroid: "F-droid", 
      },
    },
    fa: {
      translation: {
        home: "خانه",
        about: "درباره",
        contact: "تماس",
        language: "زبان",
      },
    },
    es: {
      translation: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto",
        language: "Idioma",
      },
    },
    de: {
      translation: {
        home: "Startseite",
        about: "Über uns",
        contact: "Kontakt",
        language: "Sprache",
      },
    },
    ar: {
      translation: {
        home: "الرئيسية",
        about: "حول",
        contact: "اتصل",
        language: "اللغة",
      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});


export default i18n;

