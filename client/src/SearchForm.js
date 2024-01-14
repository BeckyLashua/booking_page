
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      /><br />
      <button onClick={handleSubmit}>Manage Your Appointments</button>
    </form>
  );
}

export default SearchForm;