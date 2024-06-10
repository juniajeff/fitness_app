// src/components/SidePanel/SidePanel.js

import React from 'react';
import './SidePanel.css';

const SidePanel = ({ onSelect }) => {
  return (
    <div className="side-panel">
      <h3>Features</h3>
      <ul>
        <li onClick={() => onSelect('diet')}>Diet</li>
        <li onClick={() => onSelect('exercise')}>Exercise</li>
        <li onClick={() => onSelect('progress')}>Progress Tracker</li>
        <li onClick={() => onSelect('social')}>Social</li>
      </ul>
    </div>
  );
};

export default SidePanel;
