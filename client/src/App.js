//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import RescheduleAppointment from './pages/RescheduleAppointment';
import ConfirmAppointment from './pages/ConfirmAppointment';
import Appointments from './pages/Appointments';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book" element={<BookAppointment />} />
        <Route exact path="/reschedule" element={<RescheduleAppointment />} />
        <Route exact path="/confirm" element={<ConfirmAppointment />} />
        <Route exact path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;
