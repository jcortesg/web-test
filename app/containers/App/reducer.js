import {
  SET_ERROR_STATE,
  SET_USER_STATE

}from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  token: localStorage.getItem('token'),
});

export default function appReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
  case SET_ERROR_STATE:
    return state
      .set('token', action.token)
      .set('isAuthenticated', false)

  case SET_USER_STATE:
    return state
      .set('token', action.token)
      .set('isAuthenticated', action.token ? true : false)

  default:
    return state;
  }
}
