import React, { useEffect, useContext } from 'react';
import { WrapStyle } from '../styledComponents/GlobalStyles';
import { LoadContext, AccountContext } from '../contexts';
import {fetchAccountDetails } from '../utilities';
import { Loader, UpdatePassword, UpdateProfile, Logout } from '../components/';


const Profile = () => {
    
    const { pageload, onPageload, loadReset } = useContext(LoadContext);
    const { account, setAccount } = useContext(AccountContext);

    useEffect(() => {
        fetchAccountDetails(account, setAccount, onPageload, loadReset)
    }, []);

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
