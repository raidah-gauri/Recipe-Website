import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure this is the main application file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Render the App component */}
  </StrictMode>
);

