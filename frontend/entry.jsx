import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import {
//   fetchPlaylist,
//   fetchPlaylists,
//   createPlaylist,
//   updatePlaylist,
//   deletePlaylist
// } from './actions/playlist_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // BEGIN TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchPlaylist = fetchPlaylist;
  // window.fetchPlaylists = fetchPlaylists;
  // window.createPlaylist = createPlaylist;
  // window.updatePlaylist = updatePlaylist;
  // window.deletePlaylist = deletePlaylist;
  // END TESTING

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
