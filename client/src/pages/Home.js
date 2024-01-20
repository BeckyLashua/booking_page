import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../App.css';
function Home() {
  let navigate = useNavigate();

  function handleBookClick() {
    navigate('/book');
  }

  function handleSearchClick() {
    navigate('/manage');
  }
  const { t } = useTranslation();

  return (
    <div>
      <div class='div-wrapper'>
        <button class='form-button' onClick={handleBookClick}>
          {t('headerBooking')}
        </button><br />
      </div>
      <div class='div-wrapper'>
        <button class='form-button' onClick={handleSearchClick}>
        {t('manageApptButton')}
        </button>
      </div>
    </div>
  );
}

export default Home;