/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHANGE_FORM,
} from './constants';

export function changeForm(data) {
  return {
    type: CHANGE_FORM,
    data: data
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };

}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error: error
  };
}
