import merge from 'lodash/merge';

import {
  PLAY,
  PREVIOUS_SONG,
  NEXT_SONG,
  UP_NEXT,
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
