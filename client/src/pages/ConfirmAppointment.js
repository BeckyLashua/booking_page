import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../App.css';

function ConfirmAppointment( ) {
  let navigate = useNavigate();

  function handleBookClick() {
    navigate('/book');
  }
  function handleFindClick() {
    navigate('/manage');
  }

  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('confirmationTitle')}</h2>
      <p>{t('bookingSuccess')}</p>
      <div>
        <button class='return-button' onClick={handleBookClick}>
        {t('anotherBookingButton')}
        </button>
        <button class='return-button' onClick={handleFindClick}>
        {t('manageApptButton')}
        </button><br />
      </div>
    </div>
  );
}

export default ConfirmAppointment;