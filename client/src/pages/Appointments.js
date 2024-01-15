import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingList from '../BookingList';
import './Appointments.css';

function Appointments() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/manage');
  }

  let appts = [
    {id: 1, date: '7/03/24', time: '10:30am'},
    {id: 2, date: '9/30/24', time: '4:00pm'},
    {id: 3, date: '10/02/24', time: '1:00pm'}
  ];

  return (
    <div>
      <div>
        <button class='return-button' onClick={handleGoBackClick}>
          Go Back
        </button><br />
      </div>
      <h2>Your Appointments</h2>
      <BookingList appts = {appts}/>
    </div>
  );
}

export default Appointments;