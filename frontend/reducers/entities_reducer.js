import { combineReducers } from 'redux';
import SongReducer from './song_reducer';
import PlaylistReducer from './playlist_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

const EntitiesReducer = combineReducers({
  songs: SongReducer,
  playlists: PlaylistReducer,
  users: UserReducer,
  search: SearchReducer,
});

export default EntitiesReducer;
