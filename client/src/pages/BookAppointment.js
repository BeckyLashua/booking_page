import React, { useState } from 'react';
import BookingForm from '../BookingForm';
import { useNavigate } from 'react-router-dom';
import './BookAppointment.css';

function BookAppointment() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  return (
    <div>
      <div>
        <button class='return-button' onClick={handleGoBackClick}>
          Go Back
        </button><br />
      </div>
      <div class='div-wrapper'>
        <h2>Book an Appointment</h2>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookAppointment;