import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // но нам его надо экспортировать (экспортируем сюда наш код)
import 'bootstrap/dist/css.bootstrap.min.css';
import './App.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
