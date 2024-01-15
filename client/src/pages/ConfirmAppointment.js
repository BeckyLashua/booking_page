import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmAppointment.css';

function ConfirmAppointment( ) {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  let navigate = useNavigate();

  function handleBookClick() {
    navigate('/book');
  }
  function handleFindClick() {
    navigate('/manage');
  }

  return (
    <div>
      <h2>Appointment Confirmation</h2>
      <p>Congratulations! You booked your appointment!</p>
      <div>
        <button class='return-button' onClick={handleBookClick}>
          Book Another Appointment
        </button>
        <button class='return-button' onClick={handleFindClick}>
          Manage Your Appointments
        </button><br />
      </div>
    </div>
  );
}

export default ConfirmAppointment;