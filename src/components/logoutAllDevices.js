import React, { useContext } from 'react';
import { Button } from '../styledComponents/GlobalStyles';
import { AuthContext } from '../contexts/authContext';

const LogoutAllDevices = () => {
    const { setAuthState, setToken } = useContext(AuthContext);

    const logout = () => {
        setAuthState(false);
        setToken({token: ''});
        /// some serverside code ///
        window.location.reload()
    }
    return (
        <button onClick={logout}>Logout All Devices</button>
    )
}

export default LogoutAllDevices
