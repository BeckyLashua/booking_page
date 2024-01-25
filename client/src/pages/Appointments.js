import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
//import { useTranslation } from 'react-i18next';
import BookingList from '../components/BookingList';
import t from '../translations/en.json';

import '../App.css';


function Appointments() {
  //const location = useLocation();
  //const { appts } = location.state;
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/appointments/')
        .then(response => {
            // Handle the data
            setAppointments(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}, []);

  /*let appts = [
    {id: 1, date: '7/03/24', time: '10:30am'},
    {id: 2, date: '9/30/24', time: '4:00pm'},
    {id: 3, date: '10/02/24', time: '1:00pm'}
  ];
  */
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
      <h2>{t.appointmentsHeader}</h2>
      <BookingList appts = { appointments }/>
    </div>
  );
}

export default Appointments;