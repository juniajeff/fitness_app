// src/components/TopToolbar/TopToolbar.js

import React from 'react';
import './TopToolbar.css';

const TopToolbar = () => {
  return (
    <div className="top-toolbar">
      <h2>Fitness Web App</h2>
      <div className="toolbar-right">
        <button>Settings</button>
        <button>Account</button>
      </div>
    </div>
  );
};

export default TopToolbar;
