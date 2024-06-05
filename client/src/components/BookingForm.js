import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Stack, Box, Grid, Typography, Container} from '@mui/material';


function BookingForm() {
  const { t } = useTranslation();

  return (
    
    <Box>
      <Typography align="center"sx={{mb: 4}}>
        <h4>Book an Appointment</h4>
      </Typography>
     
      <Grid container justifyContent="center">
        <form>
          <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <TextField 
              type="text" 
              size="small"
              variant='outlined' 
              color="secondary"
              label="First Name"
              fullWidth
              required 
            />
            <TextField 
              type="text" 
              size="small"
              variant='outlined' 
              color="secondary"
              label="Last Name"
              fullWidth
              required 
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <TextField 
              type="email" 
              size="small"
              variant='outlined' 
              color="secondary"
              label="Email"
              fullWidth
              required 
            />
            <TextField 
              type="phone" 
              size="small"
              variant='outlined' 
              color="secondary"
              label="Phone Number"
              fullWidth
              required 
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
            <TextField 
              type="date" 
              size="small"
              variant='outlined' 
              color="secondary"
              label="Date"
              fullWidth
              required 
              sx={{mb: 4}}
            />
            <TextField 
              type="time" 
              size="small"
              variant='outlined' 
              color="secondary"
              label="Time"
              fullWidth
              required 
              sx={{mb: 4}}
            />
          </Stack>
          <Button variant="outlined" color="secondary" type="submit">{t('buttons.book')}</Button>
        </form>
      </Grid>
    </Box>
  );
}

export default BookingForm;