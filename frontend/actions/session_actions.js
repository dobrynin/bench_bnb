import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => (
  APIUtil.login(user.username, user.password)
  .then(session => dispatch(receiveCurrentUser(session.currentUser)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(session => dispatch(receiveCurrentUser(null)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user.username, user.password)
  .then(session => dispatch(receiveCurrentUser(session.currentUser)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
