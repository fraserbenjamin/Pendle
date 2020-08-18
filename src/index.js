import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/fonts.css";
import "./assets/scrollbar.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
