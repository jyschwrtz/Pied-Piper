import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
