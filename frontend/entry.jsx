import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {
  play,
  nextSong,
  previousSong,
  upNext
} from './actions/player_actions';
// import { selectPlaylistSongs } from './reducers/selectors';


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
  window.play = play;
  window.nextSong = nextSong;
  window.previousSong = previousSong;
  window.upNext = upNext;
  // window.deletePlaylistSong = deletePlaylistSong;
  // END TESTING

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
