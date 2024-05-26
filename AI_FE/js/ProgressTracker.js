// src/components/ProgressTracker/ProgressTracker.js

import React, { useState } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const [progress, setProgress] = useState([
    { id: 1, date: '2024-05-01', weight: 70 },
    { id: 2, date: '2024-05-15', weight: 68 },
  ]);

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>
      <ul>
        {progress.map((entry) => (
          <li key={entry.id}>
            {entry.date}: {entry.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
