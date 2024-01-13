import React, { useState } from 'react';
import RescheduleForm from '../RescheduleForm';
import './RescheduleAppointment.css';

function RescheduleAppointment() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
      </header>
      <h2>Reschedule Appointment</h2>
      <RescheduleForm />
    </div>
  );
}

export default RescheduleAppointment;