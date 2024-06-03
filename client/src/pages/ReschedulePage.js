import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios  from 'axios';
import { inputFields } from '../texts/form_fields/reschedule_inputs';
import MyForm from '../components/MyForm';
import '../App.css';

function ReschedulePage() {
  const { t} = useTranslation();

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
        setError(t('messages.doubleBooked'));
      } else if (error.response && error.response.status === 400) {
        setError(t('messages.pastDate'));
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
            {t('buttons.goHome')}
          </button>
        </Link><br />
      </div>
      <div>s
        <h2>{t('titles.rescheduleForm')}</h2>
        <MyForm
          inputs={inputFields} 
          onSubmit={onRescheduleSubmit}
          buttonLabel={t('buttons.reschedule')}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}


export default ReschedulePage;