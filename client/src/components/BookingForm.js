
import { useNavigate} from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
//import TimeInput from './TimeInput';
import MyForm from './MyForm';
import '../App.css';
import { inputFields } from './text_files/booking_inputs';


function BookingForm() {
  //const { t } = useTranslation();
  let navigate = useNavigate();
  
  const handleSubmit = (event) => {
    // Add form submission logic here
    // Go to Confirmation Page for Now
    navigate('/confirm');
  };

  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>
    </div>
  );
}  

export default BookingForm;