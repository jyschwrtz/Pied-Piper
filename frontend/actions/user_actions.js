import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const requestUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
);
