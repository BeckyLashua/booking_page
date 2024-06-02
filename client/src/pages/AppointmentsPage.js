import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import { useTranslation } from 'react-i18next';
import BookingList from '../components/BookingList';

import '../App.css';


function AppointmentsPage( { submittedEmail }) {
  const { t } = useTranslation();

  const [appts, setAppts] = useState([]);
  const location = useLocation();
  const searchInput = location.state?.submittedEmail; 

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!searchInput) return; 

      try {
        const url = `http://localhost:3001/api/appts/${encodeURIComponent(searchInput.email)}`;

        const response = await axios.get(url);
        console.log("API Response:", response.data.appts);

        //setAppts(Array.isArray(response.data) ? response.data : [response.data.appts]);
        setAppts(response.data.appts);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [searchInput]); 

  return (
    <div>
      <div>
        <Link to='/book'>
          <button className='return-button'>
          {t('headerBooking')}
          </button>
        </Link>
        <Link to='/search'>
          <button className='return-button'>
          {t('manageApptButton')}
          </button>
        </Link><br />
      </div>
      <h2>{t('appointmentsHeader')}</h2>
      {Array.isArray(appts) && appts.length > 0 ? (
        <BookingList appts={appts} />
      ) : (
          <p>{t('noAppts')}</p>
      )}
    </div>
  );
}

export default AppointmentsPage;