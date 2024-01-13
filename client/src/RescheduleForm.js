
import React, { useState } from 'react';
import CustomLabel from './CustomLabel';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
//import CustomForm from './CustomForm';
import './RescheduleForm.css';

function RescheduleForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  const handleFirstNameChange = function(event) {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = function(event) {
    setLastName(event.target.value);
  };

  const handleEmailChange = function(event) {
    setEmail(event.target.value);
  };

  const handlePhoneChange = function(event) {
    setPhone(event.target.value);
  };

  const handleDateChange = function(event) {
    setDate(event.target.value);
  };

  const handleTimeChange = function(event) {
    setTime(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };
  return (
    <form>
      <CustomLabel text="New Preferred Date" htmlFor="date" />
      <CustomInput
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
      /><br />
      <CustomLabel text="New Preferred Time" htmlFor="time" />
      <CustomInput
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={handleTimeChange}
      /><br />
      <CustomButton type="submit" onSubmit={handleSubmit} text="Reschedule Appointment" />
    </form>
  );
}

export default RescheduleForm;