import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({beginLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Comicbook Tracking App</h1>
      <p>Keeping track of important comics!</p>
      <button type="button" onClick={beginLogin}>Login</button>
    </div>
  </div>
);

LoginPage.propTypes = {
  beginLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  beginLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
