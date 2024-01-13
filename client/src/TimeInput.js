import React, { useState } from 'react';
import './TimeInput.css';

function TimeInput({type, id, name, value, min, max, step, onChange}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange} 
      min={min}
      max={max}
      step={step}
    />
  );
}

export default TimeInput;