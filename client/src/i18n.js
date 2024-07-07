import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Hello, World!",
      "text": "This is a sample text to be translated."
    }
  },
  es: {
    translation: {
      "title": "¡Hola, Mundo!",
      "text": "Este es un texto de muestra para ser traducido."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;