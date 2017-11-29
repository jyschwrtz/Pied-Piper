import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const initialState = {
  song: {},
  playlist: {},
  user: {},
};


const SearchReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = action.results;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
