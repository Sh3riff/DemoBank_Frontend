import React, { useContext } from 'react';
import { WrapStyle } from '../styledComponents/GlobalStyles';
import { LoadContext } from '../contexts';
import { Loader, UpdatePassword, UpdateProfile, Logout } from '../components/';


const Profile = () => {
    
    const { pageload } = useContext(LoadContext);

    if(pageload.isLoading) return <Loader/>;
    return (
        <WrapStyle auth>
            <UpdateProfile/>
            <UpdatePassword/>
            <Logout />
        </WrapStyle>
    )
}

export default Profile
