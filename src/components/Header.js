import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <p>
      <NavLink to="/dashboard" activeClassName="isActive">Dashboard</NavLink>&nbsp;
      <NavLink to="/create" activeClassName="isActive">Create Expense</NavLink>&nbsp;
      <button type="button" onClick={startLogout}>Logout</button>
    </p>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);