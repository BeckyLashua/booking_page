import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import MyForm from '../components/MyForm';
import { inputFields } from '../texts/form_fields/booking_inputs';
import t from '../texts/translations/en.json';

import '../App.css';


function BookingPage() {
  let navigate = useNavigate();

  const onBookSubmit = async (submittedData) => {
    try {
      console.log("Booking form submitted data:", submittedData);
      const response = await axios.post('http://localhost:3001/api/appts', submittedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;

      navigate('/confirmation', { state: { data } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error more gracefully, maybe show a message to the user
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
      </div>
    </div>
  );
}

export default BookingPage;