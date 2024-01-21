
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/SearchForm.css';

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
      <label className='form-label' htmlFor="email">{t('inputEmail')}</label>
      <input
        className='form-input'
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <button className='form-button' onClick={handleSubmit}>{t('searchButton')}</button>
    </form>
  );
}

export default SearchForm;