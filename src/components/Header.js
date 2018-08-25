import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({beginLogout}) => (
  <header>
    <h1>Comicbook Tracker</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Comicbook</NavLink>
    <button type="button" onClick={beginLogout}>Logout</button>
  </header>
);

Header.propTypes = {
  beginLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  beginLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
