import React, { createContext } from 'react';
import { useLocalStorage } from '../customHooks'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const initialAuthState = {
      isAuthenticated: false,
      accessToken: "",
      refreshToken: ""
  };

  const [authState, setAuthState] = useLocalStorage("authState", initialAuthState );

  const logout = () => {
      setAuthState(  { ...authState, isAuthenticated: false, accessToken: "", refreshToken: "" } );
  }

  return (
    <AuthContext.Provider value={{ authState, setAuthState, initialAuthState, logout}}>
        {props.children}
    </AuthContext.Provider>
  );

}; 

export default AuthContextProvider;