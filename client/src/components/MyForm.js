
import { useState } from 'react';
import '../App.css';

function Form( { inputs, onSubmit, buttonLabel }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    //const { name, value } = event.target;
    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  /*
  const validateForm = (inputs) => {
    let newErrors = {};
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].type) {
        newErrors.input.type = `${inputs[i].type} is required`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  */
  

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          <label className={input.labelClass} htmlFor={input.labelHtmlFor}>{input.labelText}</label>
          <input 
            className={input.inputClass}
            type={input.type}
            name={input.name}
            id={input.id}
            value={formData[input.name]}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default Form;