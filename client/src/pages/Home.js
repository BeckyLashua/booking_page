import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div class='div-wrapper'>
        <Link to='/book'>
          <button class='form-button'>
            {t('headerBooking')}
          </button>
        </Link><br />
      </div>
      <div class='div-wrapper'>
        <Link to='/manage'>
          <button class='form-button'>
          {t('manageApptButton')}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;