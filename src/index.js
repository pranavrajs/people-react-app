import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';

import './stylesheets/colors.css';
import './stylesheets/font-config.css';
import './stylesheets/spacing.css';
import './stylesheets/utilities.css';
import './stylesheets/app.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
