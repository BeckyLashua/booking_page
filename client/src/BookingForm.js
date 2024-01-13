
import React, { useState } from 'react';
import CustomLabel from './CustomLabel';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
//import CustomForm from './CustomForm';

function BookingForm(props) {
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
      <CustomLabel text="First Name" htmlFor="first_name"/>
      <CustomInput 
        type="text"
        id="first_name"
        name="name"
        value={firstName}
        onChange={handleFirstNameChange}
      /><br />
      <CustomLabel text="Last Name" htmlFor="last_name" />
      <CustomInput 
        type="text"
        id="last_name"
        name="last_name"
        value={lastName}
        onChange={handleLastNameChange}
      /><br />
      <CustomLabel text="Email" htmlFor="email" />
      <CustomInput
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <CustomLabel text="Phone" htmlFor="phone" />
      <CustomInput
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={handlePhoneChange}
      /><br />
      <CustomLabel text="Preferred Date" htmlFor="date" />
      <CustomInput
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
      /><br />
      <CustomLabel text="Preferred Time" htmlFor="time" />
      <CustomInput
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={handleTimeChange}
      /><br />
      <CustomButton type="submit" onSubmit={handleSubmit} text="Book Appointment" />
    </form>
  );
}

export default BookingForm;