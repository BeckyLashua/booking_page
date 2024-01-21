import React from 'react';
import { render, screen } from '@testing-library/react';
//import BookingForm from '../BookingForm';
import Form from '../Form';

const inputFields = [
  { 
    inputClass: 'firstname-input',
    type: 'text',
    name: 'firstName', 
    id: 'firstname',
    placeholder: '',
    labelClass: 'firstname-label',
    labelHtmlFor: 'firstname',
    labelText: 'First Name',
  },
  { 
    inputClass: 'lastname-input',
    type: 'text',
    name: 'lastName', 
    id: 'lastname',
    placeholder: 'Last Name',
    labelClass: 'lastname-label',
    labelHtmlFor: 'lastname',
    labelText: 'Last Name',
  },
  { 
    inputClass: 'email-input',
    type: 'email',
    name: 'email', 
    id: 'email',
    placeholder: '',
    labelClass: 'email-label',
    labelHtmlFor: 'email',
    labelText: 'Email',
  },
  { 
    inputClass: 'phone-input',
    type: 'phone',
    name: 'phone', 
    id: 'phone',
    placeholder: '',
    labelClass: 'phone-label',
    labelHtmlFor: 'phone',
    labelText: 'Phone',
  },
  { 
    inputClass: 'date-input',
    type: 'date',
    name: 'date', 
    id: 'date',
    placeholder: '',
    labelClass: 'date-label',
    labelHtmlFor: 'date',
    labelText: 'Date',
  },
  { 
    inputClass: 'time-input',
    type: 'time',
    name: 'time', 
    id: 'time',
    placeholder: '',
    labelClass: 'time-label',
    labelHtmlFor: 'time',
    labelText: 'Time',
  },
 
];

const handleSubmit = (data) => {
  console.log('Form Data:', data);
};

test('renders the booking form component', () => {
  render(<Form inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
  // Add assertions here if needed
});

test('renders all form fields', () => {
  render(<Form inputs={inputFields} onSubmit={handleSubmit} buttonLabel={'Book'}/>);
  
  // Test the input fields with labels 
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();

  // Test the submit button 
  expect(screen.getByRole('button', { name: /book/i })).toBeInTheDocument();

});