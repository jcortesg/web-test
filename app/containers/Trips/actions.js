/*
 *
 * Trips actions
 *
 */

import {
  DEFAULT_ACTION,
  TRIP_REQUEST,
  TRIP_SUCCESS,
  TRIP_FAILURE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadTrips() {
  return {
    type: TRIP_REQUEST,
  };
}

export function tripsLoaded(trips) {
  return {
    type: TRIP_SUCCESS,
    trips
  };
}

export function tripsLoadingError(error) {
  return {
    type: TASK_FAILURE,
    error,
  };
}
