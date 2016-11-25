import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { TRIP_REQUEST } from './constants';
import { URL_BASE } from '../App/constants.js';
import request from 'utils/request';
import { tripsLoaded, tripsLoadingError } from './actions';
import { selectToken } from '../App/selectors.js'

export function* getTrips() {
  const token = yield select(selectToken());
  const requestURL = `${URL_BASE}/v1/admin/trips`;
  console.log(token)
  // Call our request helper (see 'utils/request')
  const res = yield call(request, requestURL,  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AUTHORIZATION': token
    }
  });

  if (!res.err) {
    yield put(tripsLoaded(res.data));
  } else {
    yield put(tripsLoadingError(res.err));
  }
}

export function* getTripsWatcher() {
  yield fork(takeLatest, TRIP_REQUEST, getTrips);
}

// Individual exports for testing
export function* tripData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getTripsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  return;
}

// All sagas to be loaded
export default [
  tripData,
];
