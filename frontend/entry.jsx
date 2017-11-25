import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {
  requestPlaylist,
  requestPlaylists,
  createPlaylist,
  updatePlaylist,
  deletePlaylist
} from './actions/playlist_actions';
import {
  requestSong,
  requestSongs,
} from './actions/song_actions';
import { selectPlaylistSongs } from './reducers/selectors';


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
  window.requestPlaylist = requestPlaylist;
  window.requestPlaylists = requestPlaylists;
  window.requestSong = requestSong;
  window.requestSongs = requestSongs;
  window.selectPlaylistSongs = selectPlaylistSongs;
  window.createPlaylist = createPlaylist;
  window.updatePlaylist = updatePlaylist;
  window.deletePlaylist = deletePlaylist;
  // END TESTING

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
