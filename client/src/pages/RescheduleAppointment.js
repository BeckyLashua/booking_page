import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RescheduleForm from '../RescheduleForm';
import './RescheduleAppointment.css';

function RescheduleAppointment() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/appointments');
  }
  return (
    <div>
      <div>
        <button onClick={handleGoBackClick}>
          Go Back
        </button><br />
      </div>
      <h2>Reschedule Appointment</h2>
      <RescheduleForm />
    </div>
  );
}

export default RescheduleAppointment;