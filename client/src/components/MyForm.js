
import { useState } from 'react';
import '../App.css';

function MyForm( { inputs, onSubmit, buttonLabel }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    inputs.forEach(input => {
      const value = formData[input.name];
      if (!formData[input.name]) {
        newErrors[input.name] = { errorMessage: `${input.labelText} is required.` };
      } else if (input.name === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
        newErrors[input.name] = { errorMessage: 'Invalid email address' };
      } else if (input.name === 'phone' && value && !/^\+?([0-9]{1,3})\)?([0-9]{3,})$/.test(value)) {
        newErrors[input.name] = { errorMessage: 'Invalid phone number' };
      } else if (input.type === 'text' && value && !/^[A-Za-z ]+$/.test(value)) {
        // Assuming you want to apply this check to all text inputs
        newErrors[input.name] = { errorMessage: 'Invalid. Only letters are allowed' };
      };
    })
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    console.log(formData);
  };  

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <label className={input.labelClass} htmlFor={input.labelHtmlFor}>{input.labelText}</label>
          {errors[input.name] && <p style={{ color: 'red' }}>{errors[input.name].errorMessage}</p>}
          <input 
            className={input.inputClass}
            type={input.type}
            name={input.name}
            id={input.id}
            value={formData[input.name]}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
          <br />
        </div>
      ))}
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default MyForm;