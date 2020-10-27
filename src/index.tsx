import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.scss';
import './img/logo.svg';
import './img/pin.svg';
import './img/pin-active.svg';
import './img/apartment-01.jpg';
import './img/room.jpg';
import './img/apartment-02.jpg';
import './img/apartment-03.jpg';
import { store } from 'store/index';
import { App } from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
