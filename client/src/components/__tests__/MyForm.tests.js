/* import React from 'react';
import { render, screen, fireEvent, findByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyForm from '../MyForm';
import { inputFields } from '../form_fields/booking_inputs';

const handleSubmit = (data) => {
  console.log('Form Data:', data);
};

describe('tests for a mock booking form', () => {
  test('renders the booking form component', () => {
    render(<MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
  });

  test('renders all booking form fields', () => {
    render(<MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
    // Test the input fields with labels 
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  });

  // Test user interaction
  test('booking form can be filled out by user (excluding date/time)', async () => {
    render(<MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
    await userEvent.type(screen.getByLabelText(/first name/i), 'Jane');
    await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'janedoe@gmail.com');
    await userEvent.type(screen.getByLabelText(/phone/i), '1-555-333-4444');
    await userEvent.click(screen.getByRole('button', { name: /book/i }));
  });

  test('date input can be filled out by user', async () => {
    render(<MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
    const dateInput = screen.getByLabelText(/date/i);
    userEvent.clear(dateInput);
    await userEvent.type(dateInput, '2024-01-21');
    expect(dateInput.value).toBe('2024-01-21');
  });

  test('time input can be filled out by user', async () => {
    render(<MyForm inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
    const timeInput = screen.getByLabelText(/time/i);
    userEvent.clear(timeInput);
    await userEvent.type(timeInput, '10:30');
    expect(timeInput.value).toBe('10:30');
  });
});
*/