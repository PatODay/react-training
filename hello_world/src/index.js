import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './App.js';

ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
);

registerServiceWorker();
