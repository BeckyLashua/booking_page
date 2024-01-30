import { Link  } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyForm from '../components/MyForm';
import  inputFields  from '../texts/form_fields/search_input';

import t from '../texts/translations/en.json';
import '../App.css';

function SearchPage() {
  //const { t } = useTranslation();
  let navigate = useNavigate();

  const handleSubmit = async (submittedEmail) => {
    navigate('/appointments', { state: { submittedEmail }})
  };

  return (
    <div>
      <div>
        <Link to='/'>
          <button className='return-button'>
            {t.homeReturnButton}
          </button>
        </Link><br />
      </div>
      <div className='div-wrapper'>
        <h2>{t.manageApptButton}</h2>
        <MyForm 
          inputs ={inputFields}
          onSubmit={handleSubmit}
          buttonLabel={'Search'}
        />
      </div>
    </div>
  );
}

export default SearchPage;