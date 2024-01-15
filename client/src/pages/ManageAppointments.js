import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { useNavigate } from 'react-router-dom';
import './ManageAppointments.css';

function ManageAppointments() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  return (
    <div>
      <div>
        <button class='return-button'  onClick={handleGoBackClick}>
          Go Back
        </button><br />
      </div>
      <div class='div-wrapper'>
        <h2>Manage Your Appointments</h2>
        <SearchForm />
      </div>
    </div>
  );
}

export default ManageAppointments;