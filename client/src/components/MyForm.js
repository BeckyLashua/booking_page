
import { useState } from 'react';
import '../App.css';

function MyForm( { inputs, onSubmit, buttonLabel }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    inputs.forEach(input => {
      if (!formData[input.name]) {
        newErrors[input.name] = { errorMessage: `${input.labelText} is required.` };
      }
    })
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    //const { name, value } = event.target;
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