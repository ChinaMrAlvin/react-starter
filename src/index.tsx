import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FastClick from 'fastclick';

// import {LocaleProvider } from 'antd-mobile'
// import enUS from 'antd-mobile/lib/locale-provider/en_US';


FastClick.attach(document.body);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
