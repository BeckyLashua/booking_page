import { Link  } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import SearchForm from '../components/SearchForm';
import t from '../translations/en.json';
import '../App.css';

function SearchAppointments() {
  //const { t } = useTranslation();
  
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
        <SearchForm />
      </div>
    </div>
  );
}

export default SearchAppointments;