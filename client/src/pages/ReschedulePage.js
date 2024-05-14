import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import axios  from 'axios';
import { useParams } from 'react-router-dom';
import { inputFields } from '../texts/form_fields/reschedule_inputs';
import MyForm from '../components/MyForm';
import t from '../texts/translations/en.json';
import '../App.css';

function ReschedulePage() {
  //const { id } = useParams;
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

/*function ReschedulePage() {
  //const { t } = useTranslation();
  let navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  console.log("Id of appt: ", id);

  const handleFormSubmit = async (formData) => {
    if (id) {
      rescheduleAppointment(id, formData);
    } else {
      console.error('Appointment ID is missing');
    }
  };

  const rescheduleAppointment = async (id, updatedData) => {
    console.log("New schedule data:" + updatedData);
    try {
      axios.put(`http://localhost:3001/api/appts/${id}/`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log('Appointment updated successfully:', response.data);
          navigate('/appointments');
        })
        .catch(error => {
          console.error('Error updating appointment:', error.response);
        });
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
*/

export default ReschedulePage;