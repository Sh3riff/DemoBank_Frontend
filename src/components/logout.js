import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Button } from '../styledComponents/GlobalStyles';

const Logout = (props) => {
    
    const { logout } = useContext(AuthContext);
    return (
        <Button onClick={logout}>logout</Button> 
    )
}

export default Logout
