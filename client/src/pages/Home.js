import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <Link to='/book'>
          <button class='return-button'>
          {t('headerBooking')}
          </button>
        </Link>
        <Link to='/manage'>
          <button class='return-button'>
          {t('manageApptButton')}
          </button>
        </Link><br />
      </div>
    </div>
  );
}

export default Home;