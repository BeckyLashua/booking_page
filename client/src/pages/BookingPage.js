import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import { useNavigate} from 'react-router-dom';
import MyForm from '../components/MyForm';
import { inputFields } from '../texts/form_fields/booking_inputs';
import t from '../texts/translations/en.json';

import '../App.css';

function BookingPage() {
  //const { t } = useTranslation();
  let navigate = useNavigate();

  const onBookSubmit = async (submittedData) => {
    try {
      const response = await fetch('https://localhost:8080/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ submittedData }),
      });
      const data = await response.json();

      navigate('/confirmation', { message: { data } });
    } catch (error) {
      console.error('Error fetching data:', error);
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