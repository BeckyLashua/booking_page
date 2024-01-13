import React, { useState } from 'react';
import './CustomButton.css';

function CustomButton({text, type, onClick}) {
  return (
    <button
      onSubmit={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default CustomButton;