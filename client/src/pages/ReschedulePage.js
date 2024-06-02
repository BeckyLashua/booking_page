import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import axios  from 'axios';
import { inputFields } from '../texts/form_fields/reschedule_inputs';
import MyForm from '../components/MyForm';
import t from '../texts/translations/en.json';
import '../App.css';

function ReschedulePage() {
  const location = useLocation();
  const id = location.state?.id;
  let navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const onRescheduleSubmit = async (submittedData) => {
    try {
      console.log("Reschedule form submitted data:", submittedData);
      const response = await axios.patch(`http://localhost:3001/api/appts/${id}`, submittedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
      navigate('/reschedule-confirmation', { message: message });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log("error.response: ", error.response);
        setError('Sorry. This appointment time is already booked. Choose another time.');
      } else if (error.response && error.response.status === 400) {
        setError('Sorry.The appointment date and time has passed. Choose another date and time.');
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
        <h2>{t.headerReschedule}</h2>
        <MyForm
          inputs={inputFields} // Ensure these inputs are configured for rescheduling
          onSubmit={onRescheduleSubmit}
          buttonLabel={'Reschedule'}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}


export default ReschedulePage;