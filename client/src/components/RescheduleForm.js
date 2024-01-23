
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
//import TimeInput from './TimeInput';
import MyForm from './MyForm';
import { inputFields } from './text_files/reschedule_inputs';

import '../App.css';

function RescheduleForm() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const handleRescheduleSubmit = (submittedData) => {
    // Add form submission logic here
    // Go to Confirmation Page for Now
    setFormData(submittedData);
    console.log(submittedData);
    navigate('/confirm');
  };
  //const { t } = useTranslation();
  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleRescheduleSubmit} buttonLabel={'Book'}/>
    </div>
  );
}

export default RescheduleForm;