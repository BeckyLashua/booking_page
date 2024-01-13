import React, { useState } from 'react';
import BookingForm from '../BookingForm';
import SearchForm from '../SearchForm';
import RescheduleForm from '../RescheduleForm';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
      </header>
      <h2>Book an Appointment</h2>
      <BookingForm />
      <h2>Search Appointments</h2>
      <SearchForm />
      <h2>Reschedule Appointment</h2>
      <RescheduleForm />
    </div>
  );
}

export default Home;