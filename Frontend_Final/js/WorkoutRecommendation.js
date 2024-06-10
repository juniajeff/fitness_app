// src/components/WorkoutRecommendation/WorkoutRecommendation.js

import React, { useState, useEffect } from 'react';
import './WorkoutRecommendation.css';

const WorkoutRecommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch workout recommendations from an AI API or mock data
    const fetchRecommendations = async () => {
      // Example mock data
      const mockData = [
        { id: 1, workout: 'Push-ups', reps: 20 },
        { id: 2, workout: 'Squats', reps: 30 },
      ];
      setRecommendations(mockData);
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="workout-recommendation">
      <h2>Workout Recommendations</h2>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>
            {rec.workout}: {rec.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutRecommendation;
