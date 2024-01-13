import React, { useState } from 'react';
import BookingForm from '../BookingForm';
import './BookAppointment.css';

function BookAppointment() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
      </header>
      <h2>Book an Appointment</h2>
      <BookingForm />
    </div>
  );
}

export default BookAppointment;