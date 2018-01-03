import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <p>
      <NavLink to="/" exact={true} activeClassName="isActive">Dashboard</NavLink>&nbsp;
      <NavLink to="/create" activeClassName="isActive">Create Expense</NavLink>&nbsp;
      <NavLink to="/help" activeClassName="isActive">Help</NavLink>
    </p>
  </header>
);

export default Header;