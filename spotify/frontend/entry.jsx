import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';

import {
  signup,
  login,
  logout
} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');

  // testing begins
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // testing ends

  ReactDOM.render(<h1>It's working!</h1>, rootEl);
});
