
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import '../App.css';
import { Form } from 'react-router-dom';

function MyForm( { inputs, onSubmit, buttonLabel }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    inputs.forEach(input => {
      const value = formData[input.name];
      if (!formData[input.name]) {
        newErrors[input.name] = { errorMessage: `${t(`forms.${input.name}`)} ${t('forms.isRequired')}` };
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
          <label className={input.labelClass} htmlFor={input.labelHtmlFor}>
            {t(`forms.${input.name}`)}
          </label>
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
      <Button 
          variant="outlined" 
          color="primary" 
          type="submit">
              {buttonLabel}
      </Button>
    </form>
  );
}

export default MyForm;