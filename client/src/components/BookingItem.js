//import { useTranslation } from 'react-i18next';
import t from '../translations/en.json';

import '../styles/BookingItem.css';

function BookingItem( {appt} ) {
  //const { t } = useTranslation();
  return (
    <li data-testid='booking-item-1' key={appt.id}>
      <h4>{t.apptCardTitle} {appt.id}</h4>
        {t.apptCardDate} {appt.date}<br />
        {t.apptCardTime} {appt.time}<br />
    </li>
  );
}

export default BookingItem;