//import { useTranslation } from 'react-i18next';
import t from '../texts/translations/en.json';

import '../styles/BookingItem.css';

function BookingItem( {appt} ) {
  //const { t } = useTranslation();
  const formatDate = (apptDate) => {;
    const date = new Date(apptDate);
    return date.toLocaleDateString();
  }

  return (
    <li data-testid='booking-item-1'>
        {t.apptCardDate} {formatDate(appt.appt_date)}<br />
        {t.apptCardTime} {appt.appt_time}<br />
    </li>
  );
}

export default BookingItem;