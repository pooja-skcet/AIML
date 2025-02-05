import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Dashboard.css'
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider>
    <Dashboard/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
