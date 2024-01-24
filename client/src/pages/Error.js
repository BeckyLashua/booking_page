import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import t from '../translations/en.json';
import '../App.css';

function Error( ) {
  //const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t.errorTitle}</h2>
      <p>{t.bookingError}</p>
      <div>
        <Link to='/book'>
          <button className='return-button'>
          {t.tryAgainBooking}
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

export default Error;