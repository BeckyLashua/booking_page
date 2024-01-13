
import React, { useState } from 'react';
import Label from './Label';
import Input from './Input';
import Button from './Button';

function Form(props) {
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
      <Label text="First Name" htmlFor="first_name"/>
      <Input 
        type="text"
        id="first_name"
        name="name"
        value={firstName}
        onChange={handleFirstNameChange}
      /><br />
      <Label text="Last Name" htmlFor="last_name" />
      <Input 
        type="text"
        id="last_name"
        name="last_name"
        value={lastName}
        onChange={handleLastNameChange}
      /><br />
      <Label text="Email" htmlFor="email" />
      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <Label text="Phone" htmlFor="phone" />
      <Input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={handlePhoneChange}
      /><br />
      <Label text="Preferred Date" htmlFor="date" />
      <Input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
      /><br />
      <Label text="Preferred Time" htmlFor="time" />
      <Input
        type="time"
        id="time"
        date="date"
        value={time}
        onChange={handleTimeChange}
      /><br />
      <Button type="submit" onSubmit={handleSubmit} text="Submit" />
    </form>
  );
}

export default Form;