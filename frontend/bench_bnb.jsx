import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById ('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.login = login;
  window.store = store;
  window.logout = logout;
  window.fetchBenches = fetchBenches;

  ReactDOM.render(<Root store={ store }/>, root);
});
