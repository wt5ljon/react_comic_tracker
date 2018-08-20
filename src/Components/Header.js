import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Comicbook Tracker</h1>
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Comicbook</NavLink>
      <button onClick={startLogout}>Logout</button>
    </header>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);