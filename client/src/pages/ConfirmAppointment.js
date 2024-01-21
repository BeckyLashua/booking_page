import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function ConfirmAppointment( ) {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('confirmationTitle')}</h2>
      <p>{t('bookingSuccess')}</p>
      <div>
        <Link to='/book'>
          <button class='return-button'>
          {t('anotherBookingButton')}
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

export default ConfirmAppointment;