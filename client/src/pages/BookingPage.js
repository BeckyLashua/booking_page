import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import MyForm from '../components/MyForm';
import { inputFields } from '../texts/form_fields/booking_inputs';
import t from '../texts/translations/en.json';

import '../App.css';


function BookingPage() {
  let navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const onBookSubmit = async (submittedData) => {
    try {
      console.log("Booking form submitted data:", submittedData);
      const response = await axios.post('http://localhost:3001/api/appts', submittedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage(response.data.message);

      navigate('/confirmation', { state: { message: message } });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log("error.response: ", error.response);
        setError('Sorry. This appointment time is already booked. Choose another time.');
      } else {
        setError('An error occured. Please try again.');
      }
    }
  };

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
        <MyForm
          inputs={inputFields}
          onSubmit={onBookSubmit}
          buttonLabel={'Book'}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default BookingPage;