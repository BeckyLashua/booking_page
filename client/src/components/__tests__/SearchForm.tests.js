/*import React from 'react';
import { render, fireEvent, waitFor, screen} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LocationCapture from '../LocationCapture';
import SearchForm from '../SearchForm';

describe('Search Form', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('makes fetch call accurately', async () => {
    fetch.mockResponseOnce(JSON.stringify({ date: '2024-01-08', time: '15:38' }));

  render(
    <MemoryRouter initialEntries={['/']}>
      <SearchForm />
    </MemoryRouter>
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

  it('navigates to the appointments page after submission', async () => {
    fetch.mockResponseOnce(JSON.stringify({ date: '2024-01-08', time: '15:38' }));
  
    let testLocation;
    const setLocation = (location) => {
      testLocation = location;
    };

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="*" element={<LocationCapture setLocation={setLocation} />} />
        </Routes>
      </MemoryRouter>
    );
  
    // Simulate user interaction
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'beckylashua@gmail.com' } });
    fireEvent.click(screen.getByText(/Search/));

    await waitFor(() => {
      // If the fetch call and navigation are closely tied together without intermediate states
      //expect(fetch).toHaveBeenCalledTimes(1);
      expect(testLocation.pathname).toBe('/appointments');
    });
  })
});
*/