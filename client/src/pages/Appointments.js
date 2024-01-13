import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayList from '../DisplayList';
import './Appointments.css';

function Appointments() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/findappointments');
  }
  return (
    <div>
      <div>
        <button onClick={handleGoBackClick}>
          Go Back
        </button><br />
      </div>
      <h2>Your Appointments</h2>
      <DisplayList />
    </div>
  );
}

export default Appointments;