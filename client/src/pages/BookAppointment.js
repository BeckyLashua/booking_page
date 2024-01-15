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
          Go Back To Home Page
        </button><br />
      </div>
      <div>
        <h2>Book an Appointment</h2>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookAppointment;