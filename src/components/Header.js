import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({beginLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Comicbook Tracker</h1>
        </Link>
        <button className="button button--link" type="button" onClick={beginLogout}>Logout</button>      
      </div>
    </div>
  </header>
);

Header.propTypes = {
  beginLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  beginLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
