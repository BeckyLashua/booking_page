import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import axios from 'axios';
import BookingItem from './BookingItem';
import t from '../texts/translations/en.json';

import '../App.css';

function BookingItemCard( {appt} ) {
  //const { t } = useTranslation();
  let navigate = useNavigate();

  function handleCancelClick(event) {
    event.preventDefault();
    const userConfirmed = window.confirm("Are you sure you want to cancel your appointment?");
    
    if (userConfirmed) {
      axios.delete(`http://localhost:3001/api/appts/${appt.appt_id}`)
      .then(response => {
        console.log('Appointment deleted successfully');
        navigate('/cancel');
      })
      .catch(error => {
        console.error('Error deleting appointment:', error);
        navigate('/apppointments');
        // later handle error message to user
      });
    }
  }

  const handleRescheduleClick = () => {
    console.log("Navigating with id: ", appt.appt_id);
    navigate(`/reschedule/${appt.appt_id}`, { state: { id: appt.appt_id } });
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