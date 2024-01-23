import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import BookingForm from '../components/BookingForm';
import t from '../translations/en.json';

import '../App.css';

function BookAppointment() {
  //const { t } = useTranslation();

  return (
    <div>
      <div>
        <Link to='/'>
          <button className='return-button'>
            {t.homeReturnButton}
          </button>
        </Link><br />
      </div>
      <div>
        <h2>{t.headerBooking}</h2>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookAppointment;