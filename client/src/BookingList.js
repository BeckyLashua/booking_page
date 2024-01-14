import React, { useState } from 'react';
import './BookingList.css';
import BookingItemCard from './BookingItemCard';

function BookingList( { appts } ) {
  return (
    <div>
      <ul>
        {appts.map((appt) => (
          <BookingItemCard appt = {appt}/>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;