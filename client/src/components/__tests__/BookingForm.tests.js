import React from 'react';
import { render, fireEvent, waitFor, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from '../BookingForm';

describe('Booking Form submits', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('submits booking form data and handles the response', async () => {
    fetch.mockResponseOnce(JSON.stringify({ success: true }));

    render(
      <Router>
          <BookingForm />
      </Router>
    );

    // Simulate user interaction
    fireEvent.change(screen.getByLabelText(/First Name/), { target: { value: 'Rebecca' } });
    fireEvent.change(screen.getByLabelText(/Last Name/), { target: { value: 'Lashua' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'beckylashua@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '555-555-5555' } });
    fireEvent.change(screen.getByLabelText(/Date/), { target: { value: '2024-01-08' } });
    fireEvent.change(screen.getByLabelText(/Time/), { target: { value: '15:38' } });
    fireEvent.click(screen.getByText(/Book/));

    await waitFor(() => {
      // Check if the fetch was called correctly
      expect(fetch).toHaveBeenCalledWith(
        'https://localhost:8080/api/submit-form', // URL you expect to call
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ 
            firstName: 'Rebecca',
            lastName: 'Lashua', 
            email: 'beckylashua@gmail.com',
            phone: '555-555-5555',
            date: '2024-01-08',
            time: '15:38'
          })
        })
      );
    });
  });
});
