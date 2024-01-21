
import { useState } from 'react';
import '../App.css';


function Form( { inputs, onSubmit, buttonLabel }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    //sconst { name, value } = event.target;
    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

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