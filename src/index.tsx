import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import './img/logo.svg';
import './img/apartment-01.jpg';
import './img/room.jpg';
import './img/apartment-02.jpg';
import './img/apartment-03.jpg';
import { App } from './components/App/App';

const rooms = [
  'Beautiful & luxurious apartment at great location',
  'Wood and stone place',
  'Canal View Prinsengracht',
  'Nice, cozy, warm big bed apartment',
];

const fn = () => {
  console.log('clicked');
};

ReactDOM.render(<App onClick={fn} rooms={rooms} />, document.querySelector('#root'));
