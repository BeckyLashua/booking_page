import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import t from '../texts/translations/en.json';
import '../App.css';

function ConfirmationPage( { message }) {
  //const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t.confirmationTitle}</h2>
      <p>{t.bookingSuccess}</p>
      <div>
        <Link to='/book'>
          <button className='return-button'>
          {t.anotherBookingButton}
          </button>
        </Link>
        <Link to='/search'>
          <button className='return-button'>
          {t.manageApptButton}
          </button>
        </Link><br />
      </div>
    </div>
  );
}

export default ConfirmationPage;