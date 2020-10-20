import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import './img/logo.svg';
import './img/pin.svg';
import './img/pin-active.svg';
import './img/apartment-01.jpg';
import './img/room.jpg';
import './img/apartment-02.jpg';
import './img/apartment-03.jpg';
import { offers } from './mocks/offers';
import { App } from './components/App/App';

ReactDOM.render(<App rooms={offers} />, document.querySelector('#root'));
