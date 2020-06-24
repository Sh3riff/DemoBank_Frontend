import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';

function AuthRoute({ component: Component, ...rest }) {
  const { authState }  = useContext(AuthContext);

  return(
    <Route 
      {...rest} 
      render={ props => authState.isAuthenticated ?
        (<Redirect to="/" /> ) : 
        ( <Component {...props} /> )
      }
    />
  );
}

export default AuthRoute;