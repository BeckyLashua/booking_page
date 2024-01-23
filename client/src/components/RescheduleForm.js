
import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
//import TimeInput from './TimeInput';
import MyForm from './MyForm';
import { inputFields } from './text_files/reschedule_inputs';

import '../App.css';

function RescheduleForm() {
  let navigate = useNavigate();
  
  const handleSubmit = () => {
    // Add form submission logic here
    navigate('/confirm');
  };

  //const { t } = useTranslation();
  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>
    </div>
  );
}

export default RescheduleForm;