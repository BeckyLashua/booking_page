import React, { useState } from 'react';
import DisplayList from '../DisplayList';
import './Appointments.css';

function Appointments() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
      </header>
      <h2>Your Appointments</h2>
      <DisplayList />
    </div>
  );
}

export default Appointments;