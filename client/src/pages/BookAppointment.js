import React, { useState } from 'react';
import BookingForm from '../BookingForm';
import './BookAppointment.css';

function BookAppointment() {
  return (
    <div>
      <h2>Book an Appointment</h2>
      <BookingForm />
    </div>
  );
}

export default BookAppointment;