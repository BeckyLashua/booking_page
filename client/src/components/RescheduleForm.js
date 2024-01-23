
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import TimeInput from './TimeInput';
import t from '../translations/en.json';

import '../App.css';

function RescheduleForm(props) {
  const [formData, setFormData] = useState({
    date: '',
    time: ''
  });

  let navigate = useNavigate();

  const handleChange = function(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log(formData);
    navigate('/confirm');
  };

  //const { t } = useTranslation();
  return (
    <form>
      <label className='form-label' htmlFor="date">{t.rescheduleInputDate}</label>
      <input
        className='form-input'
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      /><br />
      <TimeInput 
        min = {8}
        max = {18}
        increment = {30}
        title = {t.rescheduleInputTime}
        labelClass= 'form-label'
        timeClass = 'form-input'
        htmlFor= "time"
        onChange={handleChange}
      /><br />
      <button className='form-button' type="submit" onClick={handleSubmit}>{t.rescheduleButton}</button>
    </form>
  );
}

export default RescheduleForm;