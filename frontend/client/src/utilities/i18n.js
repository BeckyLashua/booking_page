import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../texts/translations/en.json';
import es from '../texts/translations/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;