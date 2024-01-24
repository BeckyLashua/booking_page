
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import { useTranslation } from 'react-i18next';
//import t from '../translations/en.json';
import inputFields from './__tests__/text_files/search_input';
import MyForm from './MyForm';

import '../styles/SearchForm.css';


function SearchForm( { inputs, onSubmit, buttonLabel} ) {
  //const { t } = useTranslation();
  //const [email, setEmail] = useState('');
  let navigate = useNavigate();

  const handleSearchSubmit = async (submittedData) => {
    try {
      const response = await fetch('https://localhost:8080/api/search-appts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
      });
      const data = await response.json();
      navigate('/appointments', { state: { data } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //const { t } = useTranslation();
  return (
    <div className='div-wrapper'>
      <MyForm 
        inputs={inputFields} 
        onSubmit={handleSearchSubmit} 
        buttonLabel={'Search'}
        onChange />
    </div>
  );
}

export default SearchForm;