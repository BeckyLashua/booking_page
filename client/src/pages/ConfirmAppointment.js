import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmAppointment.css';

function ConfirmAppointment( ) {
  let navigate = useNavigate();

  function handleBookClick() {
    navigate('/book');
  }
  function handleFindClick() {
    navigate('/manageappointments');
  }

  return (
    <div>
      <h2>Appointment Confirmation</h2>
      <p>Congratulations! You booked your appointment!</p>
      <div>
        <button onClick={handleBookClick}>
          Book Another Appointment
        </button><br />
        <button onClick={handleFindClick}>
          Manage Appointments
        </button><br />
      </div>
    </div>
  );
}

export default ConfirmAppointment;