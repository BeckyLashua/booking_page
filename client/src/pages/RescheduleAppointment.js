import React, { useState } from 'react';
import RescheduleForm from '../RescheduleForm';
import './RescheduleAppointment.css';

function RescheduleAppointment() {
  return (
    <div>
      <h2>Reschedule Appointment</h2>
      <RescheduleForm />
    </div>
  );
}

export default RescheduleAppointment;