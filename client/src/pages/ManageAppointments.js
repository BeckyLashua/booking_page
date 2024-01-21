import { Link  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchForm from '../components/SearchForm';
import '../App.css';

function ManageAppointments() {
  const { t } = useTranslation();
  
  return (
    <div>
      <div>
        <Link to='/'>
          <button className='return-button'>
            {t('homeReturnButton')}
          </button>
        </Link><br />
      </div>
      <div className='div-wrapper'>
        <h2>{t('manageApptButton')}</h2>
        <SearchForm />
      </div>
    </div>
  );
}

export default ManageAppointments;