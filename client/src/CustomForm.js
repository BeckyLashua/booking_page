
//import React, { useState } from 'react';
import './CustomForm.css';

function CustomForm({ onSubmit, children, buttonText }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">
        {buttonText}
      </button> 
    </form>
  );
}

export default CustomForm;