import { useTranslation } from 'react-i18next';
import '../App.css';



const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN
      </button>
      <button onClick={() => changeLanguage('es')}>ES
      </button>
    </div>
  );
};

export default LanguageToggle;