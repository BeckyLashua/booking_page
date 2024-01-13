import React, { useState } from 'react';
import DisplayList from '../DisplayList';
import './Appointments.css';

function Appointments() {
  return (
    <div>
      <h2>Your Appointments</h2>
      <DisplayList />
    </div>
  );
}

export default Appointments;