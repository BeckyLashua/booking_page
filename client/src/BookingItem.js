import React, { useState } from 'react';
import './BookingItem.css';

function BookingItem( {appt} ) {
  return (
    <li key={appt.id}>
      <h4>APPOINTMENT {appt.id}</h4>
        Date: {appt.date}<br />
        Time: {appt.time}<br />
    </li>
  );
}

export default BookingItem;