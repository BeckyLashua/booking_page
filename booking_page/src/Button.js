import React, { useState } from 'react';

function Button({text, type, onSubmit}) {
  return (
    <button
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;