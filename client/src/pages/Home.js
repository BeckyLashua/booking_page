import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
  let navigate = useNavigate();

  function handleBookClick() {
    navigate('/book');
  }

  function handleSearchClick() {
    navigate('/manage');
  }

  return (
    <div>
      <div class='div-wrapper'>
        <button class='form-button' onClick={handleBookClick}>
          Book an Appointment
        </button><br />
      </div>
      <div class='div-wrapper'>
        <button class='form-button' onClick={handleSearchClick}>
          Manage Your Appointments
        </button>
      </div>
    </div>
  );
}

export default Home;