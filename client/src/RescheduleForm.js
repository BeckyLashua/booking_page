
import React, { useState } from 'react';
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
      <label class='form-label' htmlFor="date">New Preferred Date</label>
      <input
        class='form-input'
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
      /><br />
      <label class='form-label' htmlFor="time">New Preferred Time</label>
      <input
        class='form-input'
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={handleTimeChange}
      /><br />
      <button class='form-button' type="submit" onSubmit={handleSubmit}>Reschedule Appointment</button>
    </form>
  );
}

export default RescheduleForm;