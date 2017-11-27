import { RECEIVE_USERS } from '../actions/user_actions';

import merge from 'lodash/merge';

const UserReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_USERS:
      newState = action.users;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default UserReducer;
