
import { useNavigate} from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
//import TimeInput from './TimeInput';
import MyForm from './MyForm';
import '../App.css';
import { inputFields } from './text_files/booking_inputs';


function BookingForm() {
  //const { t } = useTranslation();
  let navigate = useNavigate();

  const handleBookingSubmit = async (submittedData) => {
    //setFormData(submittedData);
    await fetch('https://localhost:8080/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submittedData),
    });
    // Handle response or errors
    navigate('/confirm');
  };

  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleBookingSubmit} buttonLabel={'Book'}/>
    </div>
  );
}  

export default BookingForm;