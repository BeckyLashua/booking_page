import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import { useNavigate } from 'react-router-dom';
import './SearchAppointments.css';

function SearchAppointments() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  return (
    <div>
      <div>
        <button onClick={handleGoBackClick}>
          Go Back
        </button><br />
      </div>
      <h2>Find Your Appointments</h2>
      <SearchForm />
    </div>
  );
}

export default SearchAppointments;