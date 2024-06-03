import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function ConfirmationPage( { message }) {
  const { t } = useTranslation();
  
  return (
    <div>
      <p>{ message }</p>
      <h2>{t('titles.confirmationPage')}</h2>
      <p>{t('messages.bookingSuccess')}</p>
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

export default ConfirmationPage;