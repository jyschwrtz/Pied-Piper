import { combineReducers } from 'redux';
import SongReducer from './song_reducer';
import PlaylistReducer from './playlist_reducer';
import UserReducer from './user_reducer';

const EntitiesReducer = combineReducers({
  songs: SongReducer,
  playlists: PlaylistReducer,
  users: UserReducer,
});

export default EntitiesReducer;
