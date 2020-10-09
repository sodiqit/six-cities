import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/App';

ReactDOM.render(
  <App userName="Daniil" projectName="Six cities" />,
  document.querySelector('.root'),
);
