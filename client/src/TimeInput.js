import React, { useState } from 'react';
import './TimeInput.css';

function TimeInput({min, max, increment}) {
  const [selectedTime, setSelectedTime] = useState('');

  // Function to generate time options
  const generateTimeOptions = () => {
    let times = [];
    for (let i = 8; i < 18; i++) {
      for (let j = 0; j < 60; j += 30) { // 15-minute intervals
        let hour = i < 10 ? `0${i}` : i;
        let minute = j < 10 ? `0${j}` : j;
        times.push(`${hour}:${minute}`);
      }
    }
    return times;
  };

  // Handle change in dropdown
  const handleChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const timeOptions = generateTimeOptions();

  return (
    <div>
      <label class='form-label' htmlFor="time">Appointment Time</label><br />
        <select class='form-input' value={selectedTime} onChange={handleChange}>
          {timeOptions.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
    </div>
  );
};

export default TimeInput;