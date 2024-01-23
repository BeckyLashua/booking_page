
import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
//import t from '../translations/en.json';
import inputFields from './text_files/search_input';
import MyForm from './MyForm';

import '../styles/SearchForm.css';


function SearchForm(props) {
  //const { t } = useTranslation();
  let navigate = useNavigate();
  console.log('search inputFields: ', inputFields);
  
  const handleSearchSubmit = async (submittedData) => {
    await fetch('https://localhost:8080/api/search-appts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submittedData),
    });
    // Handle response or errors
    navigate('/appointments');
  };
  //const { t } = useTranslation();
  return (
    <div className='div-wrapper'>
      <MyForm inputs={inputFields} onSubmit={handleSearchSubmit} buttonLabel={'Search'}/>
    </div>
  );
}

export default SearchForm;