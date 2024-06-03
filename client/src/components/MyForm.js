
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../App.css';

function MyForm( { inputs, onSubmit, buttonLabel }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const buildErrorString = (inputName) => {
    let errorPrompt = '';
    if (inputName === 'client_first_name') {
      errorPrompt = t('forms.firstName');
    } else if (inputName ==='client_last_name') {
      errorPrompt = t('forms.lastName');
    } else if (inputName ==='client_email') {
      errorPrompt = t('forms.email');
    } else if (inputName ==='client_phone') {
      errorPrompt = t('forms.phone');
    } else if (inputName ==='appt_date') {
      errorPrompt = t('forms.date');
    } else if (inputName ==='start_time') {
      errorPrompt = t('forms.time');
    } 
    return errorPrompt += t('forms.isRequired');
  }

  const validateForm = () => {
    let newErrors = {};
    inputs.forEach(input => {
      const value = formData[input.name];
      if (!formData[input.name]) {
        newErrors[input.name] = { errorMessage: buildErrorString(input.name) };
      } else if (input.name === 'client_email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
        newErrors[input.name] = { errorMessage: t('forms.emailInvalid') };
      } else if (input.name === 'client_phone' && value && !/^\d{3}-*\d{3}-*\d{4}$/.test(value)) {
        newErrors[input.name] = { errorMessage: t('forms.invalidPhone') };
      } else if (input.type === 'text' && value && !/^[A-Za-z ]+$/.test(value)) {
        newErrors[input.name] = { errorMessage: t('forms.invalidText') };
      };
    })
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    onSubmit(formData);
  };  

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <div key={index}>
          {errors[input.name] && <p style={{ color: 'red' }}>{errors[input.name].errorMessage}</p>}
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
          <br />
        </div>
      ))}
      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default MyForm;