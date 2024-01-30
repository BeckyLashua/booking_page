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

  const onSearchSubmit = async (submittedEmail) => {
    try {
      // Construct the URL with the query parameter
      //const url = `https://localhost:8080/api/appointments?email=${encodeURIComponent(submittedEmail)}`;
      const url = 'http://localhost:8000/api/mock-appointments/';
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);

      // Use navigate with state to pass the appointments data
      navigate('/appointments', { appts: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
          onSubmit={onSearchSubmit}
          buttonLabel={'Search'}
        />
      </div>
    </div>
  );
}

export default SearchPage;