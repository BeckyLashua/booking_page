import React from 'react';
import { useTranslation } from 'react-i18next';
//import FlagImage from './FlagImage';


const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN
        {/*<FlagImage country='britain' language='en' />*/}
      </button>
      <button onClick={() => changeLanguage('es')}>ES
        {/*<FlagImage country='mexico' language='es'/>*/}
      </button>
    </div>
  );
};

export default LanguageToggle;