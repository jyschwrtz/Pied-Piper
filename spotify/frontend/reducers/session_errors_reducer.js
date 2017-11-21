import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
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
      newState = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
