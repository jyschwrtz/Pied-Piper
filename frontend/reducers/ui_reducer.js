import merge from 'lodash/merge';

import { PLAY, play } from '../actions/player_actions';

const initialState = {
  playing: false
};

const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case PLAY:
      newState = {};
      newState.playing = state.playing ? false : true;
      return  merge({}, state, newState);
    default:
      return state;
  }
};

export default UiReducer;
