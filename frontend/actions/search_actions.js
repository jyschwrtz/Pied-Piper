import * as MusicAPIUtil from '../util/music_api_util';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const searchDatabase = query => dispatch => (
  MusicAPIUtil.searchDatabase(query)
    .then(results => dispatch(receiveSearchResults(results)))
);
