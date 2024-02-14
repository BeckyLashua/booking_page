import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
//import { useTranslation } from 'react-i18next';
import BookingList from '../components/BookingList';
import t from '../texts/translations/en.json';

import '../App.css';


function AppointmentsPage( { submittedEmail }) {
  //const { t } = useTranslation();

  const [appts, setAppts] = useState([]);
  const location = useLocation();
  const searchInput = location.state?.submittedEmail; 

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!searchInput) return; 

      try {
        const url = `http://localhost:8000/appointments/get-appt-by-email/${encodeURIComponent(searchInput.email)}`;
        const response = await axios.get(url);
        setAppts(Array.isArray(response.data) ? response.data : [response.data]);

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
          {t.headerBooking}
          </button>
        </Link>
        <Link to='/search'>
          <button className='return-button'>
          {t.manageApptButton}
          </button>
        </Link><br />
      </div>
      <h2>{t.appointmentsHeader}</h2>
      {Array.isArray(appts) && <BookingList appts={appts} />}
    </div>
  );
}

export default AppointmentsPage;