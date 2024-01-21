
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TimeInput from './TimeInput';
import '../App.css';


function BookingForm(props) {
  const { t } = useTranslation();
  let navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleChange = function(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    // Go to Confirmation Page for Now
    console.log(formData);
    navigate('/confirm');
  };

  return (
    <form class='div-wrapper'>
      <label class='form-label' htmlFor="first_name">{t('inputFirstName')}</label><br />
      <input
        class='form-input'
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="last_name">{t('inputLastName')}</label><br />
      <input 
        class='form-input'
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="email">{t('inputEmail')}</label><br /> 
      <input
        class='form-input'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="phone">{t('inputPhone')}</label><br /> 
      <input
        class='form-input'
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      /><br />
      <label class='form-label' htmlFor="date">{t('inputDate')}</label><br />
      <input
        class='form-input'
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      /><br />
      <TimeInput
        min = {8}
        max = {18}
        increment = {30}
        name = 'booking-time'
        title = {t('inputTime')}
        labelClass= 'form-label'
        inputClass= 'form-input'
        htmlFor= {"time"}
      /><br />
      <button class='form-button' type="submit" onClick={handleSubmit}>{t('bookingButton')}</button>
    </form>
  );
}

export default BookingForm;