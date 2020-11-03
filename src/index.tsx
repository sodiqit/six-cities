import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'regenerator-runtime';

import './scss/index.scss';
import { store } from 'store/index';
import Main from 'pages/Main';
import Login from 'pages/Login';
import Favorites from 'pages/Favorites';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
