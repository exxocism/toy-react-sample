import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles';
import './index.css';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
