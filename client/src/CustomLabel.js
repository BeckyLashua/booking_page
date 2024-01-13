//import React, { useState } from 'react';
import './CustomLabel.css';

function CustomLabel({text, htmlFor}) {
  return (
    <label htmlFor={htmlFor}>{text}</label>
  );
}

export default CustomLabel;