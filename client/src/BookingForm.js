
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeInput from './TimeInput';
import './BookingForm.css';

function BookingForm(props) {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: ''
  });
  
  const handleChange = function(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    // Go to Confirmation Page for Now
    console.log(formData);
    navigate('/confirm');
  };

  return (
    <form class='div-wrapper'>
      <label class='form-label' htmlFor="first_name">First Name</label><br />
      <input
        class='form-input'
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="last_name">Last Name</label><br />
      <input 
        class='form-input'
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="email">Email</label><br /> 
      <input
        class='form-input'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="phone">Phone</label><br /> 
      <input
        class='form-input'
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="date">Appointment Date</label><br />
      <input
        class='form-input'
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      /><br />
      <TimeInput/><br />
      <button class='form-button' type="submit" onSubmit={handleSubmit}>Book Appointment</button>
    </form>
  );
}

export default BookingForm;