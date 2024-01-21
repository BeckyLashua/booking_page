import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookingList from '../components/BookingList';
import '../App.css';


function Appointments() {
  let appts = [
    {id: 1, date: '7/03/24', time: '10:30am'},
    {id: 2, date: '9/30/24', time: '4:00pm'},
    {id: 3, date: '10/02/24', time: '1:00pm'}
  ];

  const { t } = useTranslation();

  return (
    <div>
      <div>
        <Link to='/book'>
          <button class='return-button'>
          {t('headerBooking')}
          </button>
        </Link>
        <Link to='/manage'>
          <button class='return-button'>
          {t('manageApptButton')}
          </button>
        </Link><br />
      </div>
      <h2>{t('appointmentsTitle')}</h2>
      <BookingList appts = {appts}/>
    </div>
  );
}

export default Appointments;