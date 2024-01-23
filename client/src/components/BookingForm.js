
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
//import { useTranslation } from 'react-i18next';
//import TimeInput from './TimeInput';
import MyForm from './MyForm';
import '../App.css';
import { inputFields } from './text_files/booking_inputs';


function BookingForm() {
  //const { t } = useTranslation();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const handleBookingSubmit = (submittedData) => {
    // Add form submission logic here
    // Go to Confirmation Page for Now
    setFormData(submittedData);
    console.log(submittedData);
    navigate('/confirm');
  };

  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleBookingSubmit} buttonLabel={'Book'}/>
    </div>
  );
}  

export default BookingForm;