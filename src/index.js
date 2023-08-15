import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';


const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
