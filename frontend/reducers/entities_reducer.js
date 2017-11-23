import { combineReducers } from 'redux';
import SongReducer from './song_reducer';

const EntitiesReducer = combineReducers({
  songs: SongReducer
});

export default EntitiesReducer;
