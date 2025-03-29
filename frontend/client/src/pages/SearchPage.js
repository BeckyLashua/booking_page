import { Link  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import MyForm from '../components/MyForm';
import  inputFields  from '../texts/form_fields/search_input';
import '../App.css';

function SearchPage() {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const handleSubmit = async (submittedEmail) => {
    navigate('/appointments', { state: { submittedEmail }})
  };

  return (
    <div>
      <div>
        <Link to='/'>
          <button className='return-button'>
            {t('buttons.goHome')}
          </button>
        </Link><br />
      </div>
      <div className='div-wrapper'>
        <h2>{t('buttons.manageAppt')}</h2>
        <MyForm 
          inputs ={inputFields}
          onSubmit={handleSubmit}
          buttonLabel={t('buttons.search')}
        />
      </div>
    </div>
  );
}

export default SearchPage;