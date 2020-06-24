import React, { useContext, useEffect } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import { AuthContext, AccountContext, LoadContext } from '../contexts';
import { NavBar } from '../styledComponents/GlobalStyles';
import { BankSVG, CreditCardSVG, ProfileSVG, TransferSVG } from '../components/SVG';
import axios from 'axios';
import { proxy, requestHeader} from '../utilities';

function PrivateRoute({ component: Component, ...rest }) {
  const { authState }  = useContext(AuthContext);
  const { account, setAccount } = useContext(AccountContext);
  const { onPageload, loadReset } = useContext(LoadContext);

  useEffect(() => {
      (async () => {
          try {
              onPageload()
              const value = await axios.get(`${proxy}/user/accountDetails`, { headers: requestHeader } );
              console.log(value.data.status)
              const { firstName, lastName, acctNo, acctBal, acctHistory, email, phone, creditCard } = value.data.message;
              setAccount({...account, firstName, lastName, acctNo, acctBal, acctHistory, email, phone, creditCard });
              return loadReset()
          } catch (error) {
              return console.log(error)
          }
      })()
  }, []);

  return(
    <>
      <Route
        {...rest} 
        render={ props => authState.isAuthenticated ? (
        <Component {...props} />
        ) : ( <Redirect
        to={{ pathname: "/login", state: props.location }}
      /> )
        }
      />
      <NavBar>
        <NavLink to='/'><BankSVG /><span>HOME</span></NavLink>
        <NavLink to='/transfer'><TransferSVG /><span>TRANSFER</span></NavLink>
        <NavLink to='/creditcard'><CreditCardSVG /><span>CARD</span></NavLink>
        <NavLink to='/profile'><ProfileSVG /><span>PROFILE</span></NavLink>
      </NavBar>
    </>
  );
}

export default PrivateRoute;