
import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
//import TimeInput from './TimeInput';
import MyForm from './MyForm';
import { inputFields } from './__tests__/text_files/reschedule_inputs';

import '../App.css';

function RescheduleForm() {
  let navigate = useNavigate();
  
  const handleRescheduleSubmit = async (submittedData) => {
    await fetch('https://localhost:8080/api/reschedule-appts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submittedData),
    });
    // Handle response or errors
    navigate('/confirm');
  };
  //const { t } = useTranslation();
  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleRescheduleSubmit} buttonLabel={'Reschedule'}/>
    </div>
  );
}

export default RescheduleForm;