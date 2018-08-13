import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Comicbook</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Comicbook</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
    </header>
  )
};

export default Header;