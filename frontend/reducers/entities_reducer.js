import { combineReducers } from 'redux';
import SongReducer from './song_reducer';
import PlaylistReducer from './playlist_reducer';

const EntitiesReducer = combineReducers({
  songs: SongReducer,
  playlists: PlaylistReducer,
});

export default EntitiesReducer;
