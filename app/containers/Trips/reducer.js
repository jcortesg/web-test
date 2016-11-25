/*
 *
 * Trips reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TRIP_REQUEST,
  TRIP_SUCCESS,
  TRIP_FAILURE
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: fromJS({
    trips: false,
  })
})

function tripsReducer(state = initialState, action) {
  switch (action.type) {
  case TRIP_REQUEST:
    return state
      .set('loading', true)
      .set('error', false)
      .setIn(['data', 'trips'], false);
  case TRIP_SUCCESS:
    return state
      .setIn(['data', 'trips'], action.trips)
      .set('loading', false)
  case TRIP_SUCCESS:
    return state
      .set('error', action.error)
      .set('loading', false);
  default:
    return state;
  }
}

export default tripsReducer;
