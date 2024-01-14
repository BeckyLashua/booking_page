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
      <button onClick={handleBookClick}>
        Book an Appointment
      </button><br />
      <button onClick={handleSearchClick}>
        Manage Your Appointments
      </button>
    </div>
  );
}

export default Home;