import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
// import App from './App';
import MemoryGame from './MemoryGame'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MemoryGame />, document.getElementById('root'));
=======
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 1c7916933388905e1188dd6f7d5a3eb837d27909

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
