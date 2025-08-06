// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // This import is now correct for React 18
import App from './App';
// import './index.css'; // If needed

// Get the root container element
const container = document.getElementById('root');

// Create a root React DOM client (React 18 way)
const root = ReactDOM.createRoot(container);

// Render your App component inside the root
root.render(
  <React.StrictMode> {/* Optional, but common */}
    <App />
  </React.StrictMode>
);