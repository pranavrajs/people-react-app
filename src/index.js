import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './stylesheets/index.scss';
import App from './App';
import configureStore from './configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
