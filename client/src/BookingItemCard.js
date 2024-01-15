import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingItem from './BookingItem';
import './BookingItemCard.css';

function BookingItemCard( {appt} ) {
  let navigate = useNavigate();

  function handleRescheduleClick() {
    navigate('/reschedule');
  }
  function handleCancelClick() {
    const userConfirmed = window.confirm("Are you sure you want to cancel your appointment?");
    
    if (userConfirmed) {
      // User clicked 'OK'
      console.log('Appt canceled');
      // Place your logic here for when the user confirms
    }
  }
  return (
    <div class='div-wrapper'>
      <BookingItem appt={appt}/>
      <button class='form-button' onClick={handleRescheduleClick}>
          Reschedule Appointment
      </button><br />
      <button class='form-button' onClick={handleCancelClick}>
          Cancel Appointment
        </button>
    </div>
  );
}

export default BookingItemCard;