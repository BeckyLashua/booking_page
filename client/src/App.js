import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import RescheduleAppointment from './pages/RescheduleAppointment';
import ConfirmAppointment from './pages/ConfirmAppointment';
import Appointments from './pages/Appointments';
import ManageAppointments from './pages/ManageAppointments';
import Error from './pages/Error';
//import LanguageToggle from './components/LanguageToggle';
//import { useTranslation } from 'react-i18next';
import t from './translations/en.json';

import './App.css';

function App() {
  //const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t.title}</h1>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/book" element={<BookAppointment />} />
          <Route exact path="/reschedule" element={<RescheduleAppointment />} />
          <Route exact path="/confirm" element={<ConfirmAppointment />} />
          <Route exact path="/appointments" element={<Appointments />} />
          <Route exact path="/manage" element={<ManageAppointments />} />
          <Route exact path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
