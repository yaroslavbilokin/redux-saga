import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <React.StrictMode>
    <App className="container" />
  </React.StrictMode>,
  document.getElementById('root')
);
