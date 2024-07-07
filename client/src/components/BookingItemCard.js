import { useNavigate } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import axios from 'axios';
import BookingItem from './BookingItem';
import { Stack, Button, Box, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';


import '../App.css';

function BookingItemCard( {appt} ) {
  const { t } = useTranslation();
  let navigate = useNavigate();

  function handleCancelClick(event) {
    event.preventDefault();
    const userConfirmed = window.confirm(t('messages.cancelWarning'));
    
    if (userConfirmed) {
      axios.delete(`http://localhost:3001/api/appts/${appt.appt_id}`)
      .then(response => {
        console.log('Appointment deleted successfully');
        navigate('/cancel');
      })
      .catch(error => {
        console.error('Error deleting appointment:', error);
        navigate('/apppointments');
      });
    }
  }

  const handleRescheduleClick = () => {
    console.log("Navigating with id: ", appt.appt_id);
    navigate(`/reschedule/${appt.appt_id}`, { state: { id: appt.appt_id } });
  };

  return (
    <Box>
    <Grid container justifyContent="center">
      {appt && <BookingItem appt={appt}/>}
      <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={handleRescheduleClick}>
            {t('buttons.reschedule')}
        </Button>
        <Button 
          variant="outlined" 
          color="error" 
          onClick={handleCancelClick}>
            {t('buttons.cancel')}
        </Button>
        </Stack>
      </Grid>
      </Box>
  );
}

export default BookingItemCard;