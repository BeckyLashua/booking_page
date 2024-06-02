import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentsPage from './pages/AppointmentsPage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ReschedulePage from './pages/ReschedulePage';
import SearchPage from './pages/SearchPage';
import CancelConfirmation from './pages/CancelConfirmation';
import RescheduleConfirmation from './pages/RescheduleConfirmation';
import { useTranslation } from 'react-i18next';

import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const handleToggle = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('title')}</h1>
        <button onClick={handleToggle}>
          {i18n.language === 'en' ? 'Traducir al Español' : 'Translate to English'}
        </button>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/book" element={<BookingPage />} />
          <Route exact path="/reschedule/:id" element={<ReschedulePage />} />
          <Route exact path="/confirmation" element={<ConfirmationPage />} />
          <Route exact path="/cancel" element={<CancelConfirmation />} />
          <Route exact path="/reschedule-confirmation" element={<RescheduleConfirmation />} />
          <Route exact path="/appointments" element={<AppointmentsPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
