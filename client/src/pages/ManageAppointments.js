import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../styles/App.css';
function ManageAppointments() {
  let navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  const { t } = useTranslation();
  
  return (
    <div>
      <div>
        <button class='return-button'  onClick={handleGoBackClick}>
        {t('homeReturnButton')}
        </button><br />
      </div>
      <div class='div-wrapper'>
        <h2>{t('manageApptButton')}</h2>
        <SearchForm />
      </div>
    </div>
  );
}

export default ManageAppointments;