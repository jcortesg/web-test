import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constants.js'
import { URL_BASE } from '../App/constants.js';
import request from 'utils/request';
import selector from './selectors.js'
import { loginError } from './actions.js'
import { push } from 'react-router-redux';
import { setUserState } from '../App/actions.js';

export function* authorize(){
  const state = yield select(selector());
  const requestURL = `${URL_BASE}/v1/sessions/`;
  // send a post request with the login credentials
  const res = yield call(request, requestURL, {
    headers: {
      "Content-Type": 'application/json',
      'Accept': 'application/json',
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({session: state.data})
  });

  if (!res.err) {
    yield put(setUserState(res.data.token))

    // set jwt token to localstorage
    localStorage.setItem('token', res.data.token)
    yield put(push('/'));
  } else {
    // dispatch LOGIN_ERROR action
    yield put(loginError(res.err))
  }
}

export function* getLoginWatcher() {
  yield fork(takeLatest, LOGIN_REQUEST, authorize);
}

export function* loginFlow() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getLoginWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
return;
}

// All sagas to be loaded
export default [
  loginFlow,
];
