import React, { useState } from 'react';
import './BookingItem.css';

function BookingItem( {appt} ) {
  return (
    <li key={appt.id}>
      <h4>Appointment {appt.id}</h4>
        Date: {appt.date}<br />
        Time: {appt.time}
    </li>
  );
}

export default BookingItem;