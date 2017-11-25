import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from '../actions/session_actions';
import { RECEIVE_CURRENT_SONG } from '../actions/song_actions';

import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  currentSong: null,
};

const SessionReducer = (state=initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, state);
      newState.currentSong = action.currentSong;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
