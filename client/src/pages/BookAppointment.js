import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../styles/App.css';

function BookAppointment() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  const { t } = useTranslation();

  return (
    <div>
      <div>
        <button class='return-button' onClick={handleGoBackClick}>
          {t('homeReturnButton')}
        </button><br />
      </div>
      <div>
        <h2>{t('headerBooking')}</h2>
        <BookingForm />
      </div>
    </div>
  );
}

export default BookAppointment;