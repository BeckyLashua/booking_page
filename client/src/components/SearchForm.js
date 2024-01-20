
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles//SearchForm.css';

function SearchForm(props) {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleEmailChange = function(event) {
    setEmail(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    navigate('/appointments');
  };
  return (
    <form>
      <label class='form-label' htmlFor="email">{t('inputEmail')}</label>
      <input
        class='form-input'
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <button class='form-button' onClick={handleSubmit}>{t('searchButton')}</button>
    </form>
  );
}

export default SearchForm;