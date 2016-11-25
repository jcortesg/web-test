/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLoginPage from './selectors';
import { FormattedMessage } from 'react-intl';
import Input from '../../components/Input'
import Button from '../../components/Button/index.jsx'
import { changeForm, loginRequest } from './actions.js'
import messages from './messages';
import styles from './styles.scss'

const assign = Object.assign || require('object.assign');

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let error = ""

    if(this.props.error){
      error = <div className="alert alert-warning">Invalid email or password</div>
    }

    return (
      <div className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-offset-3">
              <div className="login_page__box">
                <h2 className="text-center login_page__title">
                  <FormattedMessage {...messages.header} />
                </h2>
                <br/>
                {error}
                <form onSubmit={ this.props.handleSubmit }>
                  <Input
                    type="email"
                    name="email"
                    labelValue="Email"
                    internalClass="col-md-8"
                    className="form-control input-lg"
                    labelClass="col-md-4"
                    isRequired= {true}
                    placeholder= "Email"
                    handleChange={this.changeField.bind(this)} />

                  <Input
                    type="password"
                    name="password"
                    labelValue="Password"
                    internalClass="col-md-8"
                    labelClass="col-md-4"
                    className="form-control input-lg"
                    isRequired= {true}
                    placeholder= "Password"
                    handleChange={this.changeField.bind(this)} />

                  <button
                    className="btn btn-block btn-lg btn-primary"
                    type="submit">
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Change the Email in the app state
  changeField(evt) {
    var obj = {}
    obj[evt.target.name] = evt.target.value
    var newParams = this.mergeWithParams(obj)

    this.emitChange(newParams)
  }

  mergeWithParams(change){
    return assign(this.props.data, change);
  }

  // Emits a change of the form state to the application state
  emitChange(newState) {
    this.props.dispatch(changeForm(newState));
  }

}

LoginPage.propTypes = {
  data: React.PropTypes.object,
  handleSubmit: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),

}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loginRequest());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
