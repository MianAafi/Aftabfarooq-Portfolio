import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

function RootComponent() {
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-MM98M22P7Y');

  return (
    <Router>
      <App />
    </Router>
  );
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
