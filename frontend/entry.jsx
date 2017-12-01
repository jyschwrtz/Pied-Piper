import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


// import { songsByPlaylist } from './actions/search_actions';
import { songsByPlaylist, songsByArtist } from './util/music_api_util';

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
  // window.play = play;
  window.songsByPlaylist = songsByPlaylist;
  window.songsByArtist = songsByArtist;
  // window.previousSong = previousSong;
  // window.upNext = upNext;
  // window.deletePlaylistSong = deletePlaylistSong;
  // END TESTING

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
