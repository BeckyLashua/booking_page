
//import React, { useState } from 'react';

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