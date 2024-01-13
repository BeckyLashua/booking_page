import React, { useState } from 'react';
import './CustomInput.css';

function CustomInput({type, id, name, value, onChange}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange} 
    />
  );
}

export default CustomInput;