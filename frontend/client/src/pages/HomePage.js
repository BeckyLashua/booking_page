import { Link } from 'react-router-dom';
import '../App.css';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t} = useTranslation();

  return (
    <div>
      <div>
        <Link to='/book'>
          <button className='return-button'>
          {t('buttons.book')}
          </button>
        </Link>
        <Link to='/search'>
          <button className='return-button'>
          {t('buttons.manageAppt')} 
          </button>
        </Link><br />
      </div>
    </div>
  );
}

export default HomePage;