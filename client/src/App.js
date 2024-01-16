//import logo from './logo.svg';
import React, { useTransition } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import RescheduleAppointment from './pages/RescheduleAppointment';
import ConfirmAppointment from './pages/ConfirmAppointment';
import Appointments from './pages/Appointments';
import ManageAppointments from './pages/ManageAppointments';
import './App.css';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';
//import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('title')}</h1>
      </header>
      <div>
        <LanguageToggle />
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/book" element={<BookAppointment />} />
          <Route exact path="/reschedule" element={<RescheduleAppointment />} />
          <Route exact path="/confirm" element={<ConfirmAppointment />} />
          <Route exact path="/appointments" element={<Appointments />} />
          <Route exact path="/manage" element={<ManageAppointments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
