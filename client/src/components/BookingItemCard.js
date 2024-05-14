import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import BookingItem from './BookingItem';
import t from '../texts/translations/en.json';

import '../App.css';

function BookingItemCard( {appt} ) {
  //const { t } = useTranslation();
  let navigate = useNavigate();

  function handleCancelClick() {
    const userConfirmed = window.confirm("Are you sure you want to cancel your appointment?");
    
    if (userConfirmed) {
      // User clicked 'OK'
      // remove bookingitem from bookinglist
      // Place your logic here for when the user confirms
    }
  }

  const handleRescheduleClick = () => {
    navigate('/reschedule', { state: { email: appt.client_email } });
  };

  return (
    <div className='div-wrapper'>
      {appt && <BookingItem appt={appt}/>}
         <button className='form-button' onClick={handleRescheduleClick}>
          {t.rescheduleButton}
        </button>
      <br />
      <button className='form-button' onClick={handleCancelClick}>
        {t.cancelApptButton}
      </button>
    </div>
  );
}

export default BookingItemCard;