//import logo from './logo.svg';
import BookingForm from './BookingForm';
import SearchForm from './SearchForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
      </header>
      <h2>Book an Appointment</h2>
      <BookingForm />
      <h2>Search Appointments</h2>
      <SearchForm />
    </div>
  );
}

export default App;
