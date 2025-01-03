import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import './index.css'; // Import des styles Tailwind
import App from './App';

// Rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root')); // Utilisation de createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
