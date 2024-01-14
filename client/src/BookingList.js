import React, { useState } from 'react';
import BookingItem from './BookingItem';
import './BookingList.css';

function BookingList( { appts } ) {
  return (
    <div>
      <ul>
        {appts.map((appt) => (
          <BookingItem appt = {appt}/>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;