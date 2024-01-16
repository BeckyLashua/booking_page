import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './BookingItem.css';

function BookingItem( {appt} ) {
  const { t } = useTranslation();

  return (
    <li key={appt.id}>
      <h4>{t('apptCardTitle')} {appt.id}</h4>
        {t('apptCardDate')} {appt.date}<br />
        {t('apptCardTime')} {appt.time}<br />
    </li>
  );
}

export default BookingItem;