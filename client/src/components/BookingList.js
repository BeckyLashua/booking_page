import BookingItemCard from './BookingItemCard';
import{ Box, Grid } from '@mui/material';
import '../App.css';

function BookingList( { appts } ) {
  return (
      <Grid container justifyContent="center">
      <ul>
        {appts.map((appt) => (
          <BookingItemCard 
            key={appt.appt_id} 
            appt = {appt}
          />
        ))}
      </ul>
      </Grid>
  );
}


export default BookingList;