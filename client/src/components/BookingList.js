import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/BookingItem.css';
import BookingItemCard from './BookingItemCard';

function BookingList( { appts } ) {
  const { t } = useTranslation();
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