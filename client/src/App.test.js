import { render, screen } from '@testing-library/react';
//import { useTranslation } from 'react-i18next';
import App from './App';


describe('Language translation tests', () => {
  test('renders app title header', () => {
    render(<App />);
    expect(screen.getByText('Appointment Scheduler')).toBeInTheDocument();
  });
  /*
  test('renders app title header in Spanish', () => {
    useTranslation().i18n.changeLanguage('es');
    render(<App />);
    expect(screen.getByText('Programador de Citas')).toBeInTheDocument();
  });
  */
});

