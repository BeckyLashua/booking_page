import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import axios  from 'axios';
import { inputFields } from '../texts/form_fields/reschedule_inputs';
import MyForm from '../components/MyForm';
import t from '../texts/translations/en.json';
import '../App.css';

function ReschedulePage( { email } ) {
  //const { t } = useTranslation();
  let navigate = useNavigate();
  const location = useLocation();
  const searchEmail = location.state?.email;

  const handleFormSubmit = async (formData) => {
    // Assuming formData is an object containing the updated appointment data
    rescheduleAppointment(email, formData);
  };

  const rescheduleAppointment = async (email, updatedData) => {
    console.log(updatedData);
    try {
      const url = `http://localhost:8000/appointments/update-by-email/${encodeURIComponent(searchEmail)}/`;
      const response = await axios.patch(url, updatedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Appointment updated successfully:', response.data);
      // Navigate to the appointments page with updated state
      navigate('/appointments', { state: { email } });

    } catch (error) {
      console.error('Error updating appointment:', error.response);
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
        onSubmit={handleFormSubmit}
        buttonLabel={'Reschedule'}
      />
    </div>
  );
}

export default ReschedulePage;