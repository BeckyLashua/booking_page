import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function RescheduleConfirmation( { message }) {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('titles.confirmationPage')}</h2>
      <p>{t('messages.rescheduleConfirmation')}</p>
      <div>
        <Link to='/book'>
          <button className='return-button'>
          {t('buttons.bookAgain')}
          </button>
        </Link>
        <Link to='/search'>
          <button className='return-button'>
          {t('buttons.manageAppt')}
          </button>
        </Link><br />
      </div>
    </div>
  );
}

export default RescheduleConfirmation;