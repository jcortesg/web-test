/*
 *
 * Trips
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTrips from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { loadTrips } from './actions.js'

export class Trips extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(loadTrips())
  }
  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      console.log("loding--")
      // Show an error if there is one
    } else if (this.props.error !== false) {
      console.log("error")
      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.data.trips !== false) {
      mainContent = this.props.data.trips.map((item, index) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.date}</td>
          <td>{item.place}</td>
        </tr>

      ));
 }
    return (
      <div className="row">
        <div className="col-md-8">
          <h3 className="text-center">Trips</h3>
          <br/>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {mainContent}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h4 className="text-center">
            New Trip
          </h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = selectTrips();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
