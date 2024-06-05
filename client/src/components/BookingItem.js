import { useTranslation } from 'react-i18next';

import '../App.css';

function BookingItem( {appt} ) {
  const { t } = useTranslation();
  const formatDate = (apptDate) => {;
    const date = new Date(apptDate);
    return date.toLocaleDateString();
  }

  return (
    <li data-testid='booking-item-1'>
        {t('apptCard.date')} {formatDate(appt.appt_date)}<br />
        {t('apptCard.time')} {appt.start_time} <br />
    </li>
  );
}

export default BookingItem;