import merge from 'lodash/merge';

import {
  PLAY,
  PREVIOUS_SONG,
  NEXT_SONG,
  UP_NEXT,
  PAST_SONGS_IN_PLAYLIST,
  SHUFFLE,
  LOOP,
} from '../actions/player_actions';

import {
  RECEIVE_CURRENT_SONG
} from '../actions/song_actions';

const initialState = {
  playing: false,
  songHistory: [],
  songQueue: [],
  currentSong: null,
  currentPlaylist: null,
  looping: false,
  shuffling: false,
};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case PLAY:
      newState = {};
      newState.playing = state.playing ? false : true;
      return  merge({}, state, newState);
    case SHUFFLE:
      newState = {};
      newState.shuffling = state.shuffling ? false : true;
      return  merge({}, state, newState);
    case LOOP:
      newState = {};
      newState.looping = state.looping ? false : true;
      return  merge({}, state, newState);
    case PREVIOUS_SONG:
      newState = merge({}, state);
      if (newState.currentSong) {
        newState.songQueue.unshift(newState.currentSong);
      }
      newState.currentSong = newState.songHistory.pop();
      return newState;
    case NEXT_SONG:
      newState = merge({}, state);
      if (newState.currentSong) {
        newState.songHistory.push(newState.currentSong);
      }
      newState.currentSong = newState.songQueue.shift();
      return newState;
    case UP_NEXT:
      newState = merge({}, state);
      newState.songQueue = action.songs;
      if (newState.currentSong) {
        newState.songHistory.push(newState.currentSong);
      }
      newState.currentSong = newState.songQueue.shift();
      newState.currentPlaylist = action.playlist;
      return newState;
    case PAST_SONGS_IN_PLAYLIST:
      newState = merge({}, state);
      newState.songHistory = newState.songHistory.concat(action.songs);
      // don't allow songHistory to become longer than 30
      const shl = newState.songHistory.length;
      if (shl > 30) {
        newState.songHistory = newState.songHistory.slice(shl - 30);
      }
      newState.currentPlaylist = action.playlist;
      return newState;
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, state);
      newState.currentSong = action.currentSong;
      return newState;
    default:
      return state;
  }
};

export default UiReducer;
