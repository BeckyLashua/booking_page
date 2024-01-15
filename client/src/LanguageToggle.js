import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const britishFlagImage = require('./images/british_flag.png').default;
  const mexicanFlagImage = require('./images/mexico_flag.png').default;

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        <img src={britishFlagImage} alt="British Flag" id="britishFlag" />
      </button>
      <button onClick={() => changeLanguage('es')}>
        <img src={mexicanFlagImage} alt="Mexican Flag" id="mexicanFlag" />
      </button>
    </div>
  );
};

export default LanguageToggle;