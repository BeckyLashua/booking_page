import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RescheduleForm from '../components/RescheduleForm';
import { useTranslation } from 'react-i18next';

import '../App.css';
function RescheduleAppointment() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/appointments');
  }

  const { t } = useTranslation();
  
  return (
    <div>
      <div>
        <button class='return-button'  onClick={handleGoBackClick}>
        {t('appointmentsTitle')}
        </button><br />
      </div>
      <h2>{t('rescheduleTitle')}</h2>
      <RescheduleForm />
    </div>
  );
}

export default RescheduleAppointment;