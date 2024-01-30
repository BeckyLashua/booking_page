import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import { inputFields } from '../texts/form_fields/reschedule_inputs';
import MyForm from '../components/MyForm';
import t from '../texts/translations/en.json';
import '../App.css';

function ReschedulePage() {
  //const { t } = useTranslation();
  let navigate = useNavigate();

  const onSearchSubmit = async (submittedData) => {
    try {
      const response = await fetch('https://localhost:8080/api/reschedule-booking', {
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
        <Link to='/appointments'>
          <button className='return-button'>
          {t.appointmentsReturn}
          </button>
        </Link><br />
      </div>
      <h2>{t.rescheduleTitle}</h2>
      <MyForm
        inputs={inputFields}
        onSubmit={onSearchSubmit}
        buttonLabel={'Reschedule'}
      />
    </div>
  );
}

export default ReschedulePage;