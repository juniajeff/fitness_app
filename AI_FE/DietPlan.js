// src/components/DietPlan/DietPlan.js

import React, { useState, useEffect } from 'react';
import './DietPlan.css';

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState([]);

  useEffect(() => {
    // Fetch diet plan from an AI API or mock data
    const fetchDietPlan = async () => {
      // Example mock data
      const mockData = [
        { id: 1, meal: 'Breakfast', items: 'Oatmeal, Banana' },
        { id: 2, meal: 'Lunch', items: 'Grilled Chicken, Salad' },
      ];
      setDietPlan(mockData);
    };

    fetchDietPlan();
  }, []);

  return (
    <div className="diet-plan">
      <h2>Diet Plan</h2>
      <ul>
        {dietPlan.map((meal) => (
          <li key={meal.id}>
            {meal.meal}: {meal.items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DietPlan;
