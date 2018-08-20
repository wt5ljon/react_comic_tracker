import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Comicbook</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
    </header>
  )
};

export default Header;