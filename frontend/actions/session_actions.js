import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      errs => dispatch(receiveErrors(errs.responseJSON))
    )
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      errs => dispatch(receiveErrors(errs.responseJSON))
    )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      errs => dispatch(receiveErrors(errs))
    )
);
