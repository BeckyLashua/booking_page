import React from 'react';
import { render, fireEvent, waitFor, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchForm from '../SearchForm';

describe('Search Form submits', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('submits search form data and handles the response', async () => {
    fetch.mockResponseOnce(JSON.stringify({ success: true }));

    render(
      <Router>
          <SearchForm />
      </Router>
    );

    // Simulate user interaction
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'beckylashua@gmail.com' } });
    fireEvent.click(screen.getByText(/Search/));

    await waitFor(() => {
      // Check if the fetch was called correctly
      expect(fetch).toHaveBeenCalledWith(
        'https://localhost:8080/api/search-appts', // URL you expect to call
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ 
            email: "beckylashua@gmail.com",
          })
        })
      );
    });
  });
});
