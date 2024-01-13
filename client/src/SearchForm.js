
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLabel from './CustomLabel';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
//import CustomForm from './CustomForm';
import './SearchForm.css';

function SearchForm(props) {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleEmailChange = function(event) {
    setEmail(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    navigate('/appointments');
  };
  return (
    <form>
      <CustomLabel text="Email" htmlFor="email" />
      <CustomInput
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <button onClick={handleSubmit}>Find Appointments</button>
    </form>
  );
}

export default SearchForm;