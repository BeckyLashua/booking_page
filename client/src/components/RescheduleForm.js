
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function RescheduleForm(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/appointments');
  }

  const handleDateChange = function(event) {
    setDate(event.target.value);
  };

  const handleTimeChange = function(event) {
    setTime(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    navigate('/confirm');
  };

  const { t } = useTranslation();
  return (
    <form>
      <label class='form-label' htmlFor="date">{t('rescheduleInputDate')}</label>
      <input
        class='form-input'
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
      /><br />
      <label class='form-label' htmlFor="time">{t('rescheduleInputTime')}</label>
      <input
        class='form-input'
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={handleTimeChange}
      /><br />
      <button class='form-button' type="submit" onClick={handleSubmit}>{t('rescheduleButton')}</button>
    </form>
  );
}

export default RescheduleForm;