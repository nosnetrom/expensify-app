// Higher Order Component: 
// A component that renders another component (for reusability)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}.</p>
  </div>
);

 //Props are made available to children here via spread
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Warning: privileged information below!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
        ) : (
        <p>You must log in first!</p>
        )
      }
    </div>
  )
};

// requireAuthentication
const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is info" />, document.getElementById('app'));