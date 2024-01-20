import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BookingList from '../components/BookingList';
import '../styles/App.css';


function Appointments() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  let appts = [
    {id: 1, date: '7/03/24', time: '10:30am'},
    {id: 2, date: '9/30/24', time: '4:00pm'},
    {id: 3, date: '10/02/24', time: '1:00pm'}
  ];

  const { t } = useTranslation();

  return (
    <div>
      <div>
        <button class='return-button' onClick={handleGoBackClick}>
        {t('homeReturnButton')}
        </button><br />
      </div>
      <h2>{t('appointmentsTitle')}</h2>
      <BookingList appts = {appts}/>
    </div>
  );
}

export default Appointments;