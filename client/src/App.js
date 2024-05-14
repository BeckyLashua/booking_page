import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentsPage from './pages/AppointmentsPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ReschedulePage from './pages/ReschedulePage';
import SearchPage from './pages/SearchPage';
//import LanguageToggle from './components/LanguageToggle';
//import { useTranslation } from 'react-i18next';
import t from './texts/translations/en.json';

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
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/book" element={<BookingPage />} />
          <Route exact path="/reschedule/:id" element={<ReschedulePage />} />
          <Route exact path="/confirmation" element={<ConfirmationPage />} />
          <Route exact path="/appointments" element={<AppointmentsPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
