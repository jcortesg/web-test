/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHANGE_FORM,
} from './constants';

const initialState = fromJS({
  data: {}
});

function loginPageReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
  case CHANGE_FORM:
    return state
      .set("data", action.data)
  case LOGIN_REQUEST:
    return state;
  case LOGIN_ERROR:
    return state
      .set('errors', action.error);
  default:
    return state;
  }
}

export default loginPageReducer;
