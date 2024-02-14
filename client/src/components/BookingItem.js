//import { useTranslation } from 'react-i18next';
import t from '../texts/translations/en.json';

import '../styles/BookingItem.css';

function BookingItem( {appt} ) {
  //const { t } = useTranslation();
  return (
    <li data-testid='booking-item-1' key={appt.appt_id}>
        {t.apptCardDate} {appt.appt_date}<br />
        {t.apptCardTime} {appt.appt_time}<br />
    </li>
  );
}

export default BookingItem;