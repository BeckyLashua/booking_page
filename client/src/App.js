//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import RescheduleAppointment from './pages/RescheduleAppointment';
import ConfirmAppointment from './pages/ConfirmAppointment';
import Appointments from './pages/Appointments';
import FindAppointments from './pages/FindAppointments';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/book" element={<BookAppointment />} />
          <Route exact path="/reschedule" element={<RescheduleAppointment />} />
          <Route exact path="/confirm" element={<ConfirmAppointment />} />
          <Route exact path="/appointments" element={<Appointments />} />
          <Route exact path="/findappointments" element={<FindAppointments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
