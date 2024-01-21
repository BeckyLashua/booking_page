
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
    navigate('/confirm');
  };

  return (
    <form className='div-wrapper'>
      <label className='form-label' htmlFor="first_name">{t('inputFirstName')}</label><br />
      <input
        className='form-input'
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      /><br />
      <label className='form-label' htmlFor="last_name">{t('inputLastName')}</label><br />
      <input 
        className='form-input'
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      /><br />
      <label className='form-label' htmlFor="email">{t('inputEmail')}</label><br /> 
      <input
        className='form-input'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /><br />
      <label className='form-label' htmlFor="phone">{t('inputPhone')}</label><br /> 
      <input
        className='form-input'
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      /><br />
      <label className='form-label' htmlFor="date">{t('inputDate')}</label><br />
      <input
        className='form-input'
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
        title = {t('inputTime')}
        labelClass= 'form-label'
        inputClass= 'form-input'
        htmlFor= {"time"}
        onChange={handleChange}
        value={formData.time}
      /><br />
      <button className='form-button' type="submit" onClick={handleSubmit}>{t('bookingButton')}</button>
    </form>
  );
}

export default BookingForm;