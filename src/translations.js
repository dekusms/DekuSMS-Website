import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // navbar
        home: "Home",
        about: "About",
        contact: "Contact",
        language: "Language",
        // hero
        heroTitle: "Your Messages",
        span: "Reinvented", 
        heroSubTitle1: "Privacy Control", 
        heroDescription: "Empower your communication with end-to-end encryption and complete cloud integration. Stay connected, securely.",
        playstore: "Download on Playstore", 
        fdroid: "Download on F-droid",
        // Gratitude Section
        gratitudeTitle: "Secure, Smart, and Unstoppable",
        gratitudeText: "DekuSMS isn’t just an SMS app—it’s a game-changer. Built for privacy and power, it delivers end-to-end encryption, SMS-to-cloud forwarding, and full control over your messages. Say goodbye to limitations and hello to secure, customizable, and intelligent messaging. Your privacy. Your rules. Your SMS, evolved. 🚀",
        // About Section
        aboutTitle: "what you need to know about DekuSMS",
        aboutDescription1: "is an open-source Android SMS application designed for secure messaging, SMS image transmission, and SMS-Cloud communications.",
        aboutDescription2: "Unlike traditional SMS apps, DekuSMS allows users to configure their own cloud servers, giving full control over their data and privacy. The app is built for users who value security, encryption, and flexibility.",
        keyFeatures: "Key Features",
        feature1Title: "End-to-End Encryption",
        feature1Desc: "Secure SMS messaging with complete privacy protection.",
        feature2Title: "Cloud Forwarding",
        feature2Desc: "Sync messages to your personal cloud server.",
        feature3Title: "Use as SMS Gateway",
        feature3Desc: "Send SMS via your Android phone with ease.",
        feature4Title: "Open Source & Community-Driven",
        feature4Desc: "Built by the community for complete transparency and control.",
        featuresImageAlt: "Features Banner",
        // Download Section
        downloadTitle: "Get DekuSMS",
        downloadDescription: "Join thousands of users and download DekuSMS today! Available on your favorite platforms.",
        downloadPlaystore: "Get it on Google Play",
        downloadFdroid: "Get it on F-Droid",
        // Footer
        privacyPolicy: "Privacy Policy",
        support: "Support",
      },
    },
    fr: {
      translation: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        language: "Langue",
        // hero
        heroTitle: "Vos Messages, Réinventés ", 
        heroSubTitle1: "Confidentialité", 
        heroSubTitle2: "Contrôle",
        heroDescription: "Renforcez vos communications avec un chiffrement de bout en bout et une intégration complète dans le cloud. Restez connecté, en toute sécurité.",
        playstore: "Playstore", 
        fdroid: "F-droid", 
        // Gratitude Section
        gratitudeTitle: "Sécurisé, Intelligent et Inarrêtable",
        gratitudeText: "DekuSMS n'est pas qu'une simple application SMS—c'est une révolution. Conçu pour la confidentialité et la puissance, il offre un chiffrement de bout en bout, un transfert des SMS vers le cloud et un contrôle total sur vos messages. Dites adieu aux limitations et bonjour à une messagerie sécurisée, personnalisable et intelligente. Votre vie privée. Vos règles. Votre SMS, évolué. 🚀",
        // About Section
        aboutTitle: "À propos de DekuSMS",
        aboutDescription1: "est une application SMS Android open-source conçue pour la messagerie sécurisée, la transmission d'images SMS et les communications SMS-Cloud.",
        aboutDescription2: "Contrairement aux applications SMS traditionnelles, DekuSMS permet aux utilisateurs de configurer leurs propres serveurs cloud, leur offrant un contrôle total sur leurs données et leur confidentialité. L'application est conçue pour ceux qui valorisent la sécurité, le chiffrement et la flexibilité.",
        keyFeatures: "Principales fonctionnalités",
        feature1Title: "Chiffrement de bout en bout",
        feature1Desc: "Messagerie SMS sécurisée avec protection complète de la confidentialité.",
        feature2Title: "Transfert vers le cloud",
        feature2Desc: "Synchronisez les messages avec votre serveur cloud personnel.",
        feature3Title: "Utilisation comme passerelle SMS",
        feature3Desc: "Envoyez des SMS via votre téléphone Android en toute simplicité.",
        feature4Title: "Open Source et Communautaire",
        feature4Desc: "Construit par la communauté pour une transparence et un contrôle complets.",
        featuresImageAlt: "Bannière des fonctionnalités",
        // Footer
        privacyPolicy: "Politique de confidentialité",
        support: "Support",
      },
    },
    es: {
      translation: {
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto",
        language: "Idioma",
        // hero
        heroTitle: "Tus Mensajes, <span> Reinventados </span>", 
        heroSubTitle1: "Privacidad", 
        heroSubTitle2: "Control", 
        heroDescription: "Potencia tu comunicación con cifrado de extremo a extremo e integración completa en la nube. Mantente conectado, de forma segura.",
        playstore: "Playstore", 
        fdroid: "F-droid",
        // about
        "gratitudeTitle": "Seguro, Inteligente e Imparable",
        "gratitudeText": "DekuSMS no es solo una aplicación de SMS—es una revolución. Diseñado para la privacidad y la potencia, ofrece cifrado de extremo a extremo, reenvío de SMS a la nube y control total sobre tus mensajes. Di adiós a las limitaciones y da la bienvenida a una mensajería segura, personalizable e inteligente. Tu privacidad. Tus reglas. Tus SMS, evolucionados. 🚀",
        // Footer
        privacyPolicy: "Política de privacidad",
        support: "Soporte",
        // About Section
        aboutTitle: "Acerca de DekuSMS",
        aboutDescription1: "es una aplicación SMS de código abierto para Android diseñada para mensajería segura, transmisión de imágenes SMS y comunicaciones en la nube.",
        aboutDescription2: "A diferencia de las aplicaciones SMS tradicionales, DekuSMS permite a los usuarios configurar sus propios servidores en la nube, brindándoles control total sobre sus datos y privacidad. La aplicación está diseñada para quienes valoran la seguridad, el cifrado y la flexibilidad.",
        keyFeatures: "Características Clave",
        feature1Title: "Cifrado de Extremo a Extremo",
        feature1Desc: "Mensajería SMS segura con protección total de privacidad.",
        feature2Title: "Reenvío a la Nube",
        feature2Desc: "Sincroniza mensajes con tu servidor en la nube personal.",
        feature3Title: "Usar como Pasarela SMS",
        feature3Desc: "Envía SMS a través de tu teléfono Android con facilidad.",
        feature4Title: "Código Abierto y Comunitario",
        feature4Desc: "Construido por la comunidad para una transparencia y control total.",
        featuresImageAlt: "Banner de características",
      },
    },
    de: {
      translation: {
        home: "Startseite",
        about: "Über uns",
        contact: "Kontakt",
        language: "Sprache",
        // hero
        heroTitle: "Ihre Nachrichten, <span> Neu Erfunden </span>", 
        heroSubTitle1: "Privatsphäre", 
        heroSubTitle2: "Kontrolle", 
        heroDescription: "Stärken Sie Ihre Kommunikation mit End-to-End-Verschlüsselung und vollständiger Cloud-Integration. Bleiben Sie sicher verbunden.",
        playstore: "Playstore", 
        fdroid: "F-droid",
        // Footer
        privacyPolicy: "Datenschutzrichtlinie",
        support: "Unterstützung",
        // About Section
        aboutTitle: "Über DekuSMS",
        aboutDescription1: "ist eine Open-Source-Android-SMS-Anwendung, die für sichere Nachrichtenübermittlung, SMS-Bildübertragung und SMS-Cloud-Kommunikation entwickelt wurde.",
        aboutDescription2: "Im Gegensatz zu herkömmlichen SMS-Apps ermöglicht DekuSMS den Nutzern die Konfiguration eigener Cloud-Server, wodurch sie die volle Kontrolle über ihre Daten und Privatsphäre erhalten. Die App wurde für Nutzer entwickelt, die Wert auf Sicherheit, Verschlüsselung und Flexibilität legen.",
        keyFeatures: "Hauptmerkmale",
        feature1Title: "Ende-zu-Ende-Verschlüsselung",
        feature1Desc: "Sichere SMS-Kommunikation mit vollständigem Datenschutz.",
        feature2Title: "Cloud-Weiterleitung",
        feature2Desc: "Synchronisieren Sie Nachrichten mit Ihrem persönlichen Cloud-Server.",
        feature3Title: "Als SMS-Gateway verwenden",
        feature3Desc: "Senden Sie SMS ganz einfach über Ihr Android-Telefon.",
        feature4Title: "Open Source & Community-basiert",
        feature4Desc: "Von der Community entwickelt für volle Transparenz und Kontrolle.",
        featuresImageAlt: "Funktionsbanner",
      },
    },
    ar: {
      translation: {
        home: "الرئيسية",
        about: "حول",
        contact: "اتصل",
        language: "اللغة",
        // hero
        heroTitle: "رسائلك، <span> مُعاد اختراعها </span>", 
        heroSubTitle1: "الخصوصية", 
        heroSubTitle2: "التحكم", 
        heroDescription: "قم بتعزيز تواصلك مع التشفير من الطرف إلى الطرف ودمج كامل مع السحابة. ابقَ متصلاً، بأمان.",
        playstore: "Playstore", 
        fdroid: "F-droid",
        // gratitude
        "gratitudeTitle": "آمن، ذكي، ولا يُوقَف",
        "gratitudeText": "DekuSMS ليس مجرد تطبيق SMS—إنه ثورة. مصمم للخصوصية والقوة، يوفر تشفيرًا من طرف إلى طرف، وإعادة توجيه الرسائل القصيرة إلى السحابة، وتحكمًا كاملاً في رسائلك. قل وداعًا للقيود ومرحبًا برسائل آمنة، قابلة للتخصيص، وذكية. خصوصيتك. قواعدك. رسائلك القصيرة، متطورة. 🚀"
,
        // Footer
        privacyPolicy: "سياسة الخصوصية",
        support: "الدعم",
        // About Section
        aboutTitle: "حول DekuSMS",
        aboutDescription1: "هو تطبيق SMS مفتوح المصدر لنظام Android مصمم للمراسلة الآمنة ونقل صور الرسائل القصيرة واتصالات السحابة.",
        aboutDescription2: "على عكس تطبيقات الرسائل القصيرة التقليدية، يسمح DekuSMS للمستخدمين بتكوين خوادم السحابة الخاصة بهم، مما يمنحهم التحكم الكامل في بياناتهم وخصوصيتهم. تم تصميم التطبيق للمستخدمين الذين يقدرون الأمان والتشفير والمرونة.",
        keyFeatures: "الميزات الرئيسية",
        feature1Title: "تشفير من طرف إلى طرف",
        feature1Desc: "مراسلة SMS آمنة مع حماية كاملة للخصوصية.",
        feature2Title: "إعادة توجيه إلى السحابة",
        feature2Desc: "مزامنة الرسائل مع خادم السحابة الخاص بك.",
        feature3Title: "استخدام كبوابة SMS",
        feature3Desc: "إرسال الرسائل القصيرة عبر هاتف Android الخاص بك بسهولة.",
        feature4Title: "مفتوح المصدر وقائم على المجتمع",
        feature4Desc: "تم بناؤه من قبل المجتمع لتحقيق الشفافية والتحكم الكامل.",
        featuresImageAlt: "بانر الميزات",
      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
