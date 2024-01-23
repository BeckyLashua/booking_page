import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import RescheduleForm from '../components/RescheduleForm';
import t from '../translations/en.json';
import '../App.css';

function RescheduleAppointment() {
  //const { t } = useTranslation();
  
  return (
    <div>
      <div>
        <Link to='/appointments'>
          <button className='return-button'>
          {t.appointmentsReturn}
          </button>
        </Link><br />
      </div>
      <h2>{t.rescheduleTitle}</h2>
      <RescheduleForm />
    </div>
  );
}

export default RescheduleAppointment;