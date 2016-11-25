import expect from 'expect';
import tripsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('tripsReducer', () => {
  it('returns the initial state', () => {
    expect(tripsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
