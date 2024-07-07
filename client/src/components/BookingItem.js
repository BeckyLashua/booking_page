import { useTranslation } from 'react-i18next';
import { Box, Grid, Container, Typography } from '@mui/material';

import '../App.css';

function BookingItem( {appt} ) {
  const { t } = useTranslation();
  const formatDate = (apptDate) => {;
    const date = new Date(apptDate);
    return date.toLocaleDateString();
  }

  return (
    <li data-testid='booking-item-1'>
    <Typography align="center" sx={{mb: 4}}>
      <Container>
        {t('apptCard.date')} {formatDate(appt.appt_date)}<br />
        {t('apptCard.time')} {appt.start_time} 
      </Container>
      </Typography>
    </li>
  );
}

export default BookingItem;