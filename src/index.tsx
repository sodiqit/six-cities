import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { App } from './components/App';

ReactDOM.render(
  <App userName="Daniil" projectName="Six cities - custom SPA" />,
  document.querySelector('#root'),
);
