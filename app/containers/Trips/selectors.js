import { createSelector } from 'reselect';

/**
 * Direct selector to the trips state domain
 */
const selectTripsDomain = () => (state) => state.get('trips');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Trips
 */

const selectTrips = () => createSelector(
  selectTripsDomain(),
  (substate) => substate.toJS()
);

export default selectTrips;
export {
  selectTripsDomain,
};
