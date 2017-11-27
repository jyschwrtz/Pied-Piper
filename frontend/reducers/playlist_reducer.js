import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      newState = action.playlists;
      return merge({}, state, newState);
    case RECEIVE_PLAYLIST:
      newState = action.playlist;
      return merge({}, state, newState);
    case REMOVE_PLAYLIST:
      newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default PlaylistReducer;
