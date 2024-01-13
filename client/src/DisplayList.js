import React, { useState } from 'react';
import './DisplayList.css';

function DisplayList() {
  return (
    <div>
      <ul>
        <li>
          <h4>Appointment 1</h4>
          <p>Date: 7/18/89</p>
          <p>Time: 1:30pm</p>
        </li>
        <li>
          <h4>Appointment 2</h4>
          <p>Date: 8/35/89</p>
          <p>Time: 10:30am</p>
        </li>
      </ul>
    </div>
  );
}

export default DisplayList;