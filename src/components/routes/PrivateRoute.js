import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../context/auth.context';

const PrivateRoute = ({ children, ...rest }) => {
  let { state } = useContext(AuthContext);
  console.log(state.isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
