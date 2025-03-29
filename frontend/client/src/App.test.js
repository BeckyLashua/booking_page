import { render, screen } from '@testing-library/react';
//import { useTranslation } from 'react-i18next';
import App from './App';


describe('App component tests', () => {
  test('renders app title header', () => {
    render(<App />);
    expect(screen.getByText('Appointment Scheduler')).toBeInTheDocument();
  });
});

