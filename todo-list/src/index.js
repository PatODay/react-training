import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)
registerServiceWorker();
