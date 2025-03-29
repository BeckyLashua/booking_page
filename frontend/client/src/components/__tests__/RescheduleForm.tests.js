/*import React from 'react';
import { render, fireEvent, waitFor, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
//import RescheduleForm from '../RescheduleForm';

describe('Reschedule Form', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('submits reschedule form data and handles the response', async () => {
    fetch.mockResponseOnce(JSON.stringify({ success: true }));

    render(
      <Router>
          <RescheduleForm />
      </Router>
    );

    // Simulate user interaction
    fireEvent.change(screen.getByLabelText(/Date/), { target: { value: '2024-01-08' } });
    fireEvent.change(screen.getByLabelText(/Time/), { target: { value: '15:38' } });
    fireEvent.click(screen.getByText(/Reschedule/));

    await waitFor(() => {
      // Check if the fetch was called correctly
      expect(fetch).toHaveBeenCalledWith(
        'https://localhost:8080/api/reschedule-appts', // URL you expect to call
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ 
            date: '2024-01-08',
            time: '15:38'
          })
        })
      );
    });
  });
});
*/