//import React, { useState } from 'react';

function CustomLabel({text, htmlFor}) {
  return (
    <label htmlFor={htmlFor}>{text}</label>
  );
}

export default CustomLabel;