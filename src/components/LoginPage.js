import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({beginLogin}) => (
  <div>
    <button type="button" onClick={beginLogin}>Login</button>
  </div>
);

LoginPage.propTypes = {
  beginLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  beginLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
