import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

import { Home, Login, Signup, SignupComplete, ForgetPassword, PageNotFound, CreditCard, Profile, Transfer } from "../pages/allPages";

const AppRoutes = props => {
  return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home}/>
          <PrivateRoute exact path='/creditCard' component={CreditCard}/>
          <PrivateRoute exact path='/profile' component={Profile}/>
          <PrivateRoute exact path='/transfer' component={Transfer}/>
          <AuthRoute exact path='/register' component={Signup}/>
          <AuthRoute exact path='/login' component={Login}/>
          <AuthRoute exact path='/registered' component={SignupComplete}/>
          <AuthRoute exact path='/forgetpassword' component={ForgetPassword}/>
          
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
};

export default AppRoutes;
