import {
  SET_ERROR_STATE,
  SET_USER_STATE

}from './constants';

export function setErrorState(error = new Error('Something went wrong.')) {
  return {
    type: SET_ERROR_STATE,
  };
}

export function setUserState(token) {
  return {
    type: SET_USER_STATE,
    token
  };
}
