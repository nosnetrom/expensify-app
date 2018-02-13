import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ( {startLogin} ) => (
  <div className="LoginPage box-layout">
    <p>The Expensify App<br />
      <button className="btn-blue" onClick={startLogin}>Login with Google</button>
    </p>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);