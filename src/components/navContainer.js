import React,{ useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts';
import { NavBar } from '../styledComponents/GlobalStyles';
import { BankSVG, CreditCardSVG, TransferSVG, ProfileSVG, } from '../components/SVG';

const NavContainer = () => {
    const { authState }  = useContext(AuthContext);
    if(!authState.isAuthenticated) return <></>;
    return (
        <NavBar>
            <NavLink to='/'><BankSVG /><span>HOME</span></NavLink>
            <NavLink to='/creditcard'><CreditCardSVG /><span>CREDIT CARD</span></NavLink>
            <NavLink to='/transfer'><TransferSVG /><span>TRANSFER</span></NavLink>
            <NavLink to='/profile'><ProfileSVG /><span>PROFILE</span></NavLink>
        </NavBar>
    )
}

export default NavContainer
