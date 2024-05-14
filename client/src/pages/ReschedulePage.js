import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
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

  const onRescheduleSubmit = async (submittedData) => {
    try {
      console.log("Reschedule form submitted data:", submittedData);
      const response = await axios.patch(`http://localhost:3001/api/appts/${id}`, submittedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;

      navigate('/confirmation', { state: { data } });
    } catch (error) {
      console.error('Error updating appointment:', error);
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
      </div>
    </div>
  );
}


export default ReschedulePage;