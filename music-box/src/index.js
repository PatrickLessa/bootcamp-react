import React from 'react';
import ReactDOM from 'react-dom';
import MySongs from './pages/MySongs';
import './assets/css/reset.css';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <MySongs></MySongs>
  </React.StrictMode>,
  document.getElementById('root')
);