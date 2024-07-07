import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import { useTranslation } from 'react-i18next';
import BookingList from '../components/BookingList';
import { Typography, Grid, Button, Box} from '@mui/material';
import '../App.css';


function AppointmentsPage( { submittedEmail }) {
  const { t } = useTranslation();

  const [appts, setAppts] = useState([]);
  const location = useLocation();
  const searchInput = location.state?.submittedEmail; 

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!searchInput) return; 

      try {
        const url = `http://localhost:3001/api/appts/${encodeURIComponent(searchInput.client_email)}`;

        const response = await axios.get(url);
        console.log("API Response:", response.data.appts);

        //setAppts(Array.isArray(response.data) ? response.data : [response.data.appts]);
        setAppts(response.data.appts);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [searchInput]); 

  return (
    <div>

      <Grid container justifyContent="center">
        <Box> 
        <Link to='/book'>
        <Button 
          variant="outlined" 
          color="primary" 
          >
            {t('buttons.bookAgain')}
        </Button>
        </Link>
        <Link to='/search'>
        <Button 
          variant="outlined" 
          color="primary">
            {t('buttons.manageAppt')}
        </Button>
        </Link><br />
        </Box>
      </Grid>
      <Typography align="center"sx={{mb: 4}}>
        <h3>{t('titles.apptsPage')}</h3>
      </Typography>
      {Array.isArray(appts) && appts.length > 0 ? (
        <BookingList appts={appts} />
      ) : (
          <p>{t('messages.noAppts')}</p>
      )}
    </div>
  );
}

export default AppointmentsPage;