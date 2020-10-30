import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'regenerator-runtime';
import './scss/index.scss';
import './img/logo.svg';
import './img/pin.svg';
import './img/pin-active.svg';
import './img/apartment-01.jpg';
import './img/room.jpg';
import './img/apartment-02.jpg';
import './img/apartment-03.jpg';
import { store } from 'store/index';
import Main from 'pages/Main';
import Login from 'pages/Login';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
