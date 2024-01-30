import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import t from '../texts/translations/en.json';
import '../App.css';

function HomePage() {
  //const { t } = useTranslation();

  return (
    <div>
      <div>
        <Link to='/book'>
          <button className='return-button'>
          {t.headerBooking}
          </button>
        </Link>
        <Link to='/search'>
          <button className='return-button'>
          {t.manageApptButton} 
          </button>
        </Link><br />
      </div>
    </div>
  );
}

export default HomePage;