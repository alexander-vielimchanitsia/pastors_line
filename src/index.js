import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import store from './store';
import App from './App';
import { appContainer } from './constants';
import './index.sass';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  appContainer,
);
