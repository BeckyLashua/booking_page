import { useState } from 'react';
import '../App.css';

// Function to generate time options
const generateTimeOptions = (min, max, increment ) => {
  let times = [];
  for (let i = 8; i < 18; i++) {
    for (let j = 0; j < 60; j += increment) { 
      let hour = i < 10 ? `0${i}` : i;
      let minute = j < 10 ? `0${j}` : j;
      times.push(`${hour}:${minute}`);
    }
  }
  return times;
};

function TimeInput({min, max, increment, title, labelClass, inputClass, htmlFor}) {
  const [selectedTime, setSelectedTime] = useState('');

  // Handle change in dropdown
  const handleChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const timeOptions = generateTimeOptions({ min }, { max }, { increment });

  return (
    <div>
      <label class={ labelClass } htmlFor={ htmlFor }>{ title }</label><br />
        <select 
          class={ inputClass } 
          value={selectedTime} 
          onChange={handleChange}>
          {timeOptions.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
    </div>
  );
};

export default TimeInput;