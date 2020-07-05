import React, { useEffect, useContext } from 'react';
import { WrapStyle, CardContainer, Toggle } from '../styledComponents/GlobalStyles';
import { LoadContext, AccountContext } from '../contexts';
import {fetchAccountDetails } from '../utilities';
import { Loader, DemoBankTransfer, OtherBanksTransfer }from '../components';

const Transfer = () => {

    const { pageload, onPageload, loadReset } = useContext(LoadContext);
    const { account, setAccount } = useContext(AccountContext);
    
    useEffect(() => {
        fetchAccountDetails(account, setAccount, onPageload, loadReset)
    }, []);

    if(pageload.isLoading) return <Loader/>;
    return (
        < WrapStyle auth>
            <CardContainer>
                <div><h1>Fund Transfer</h1></div>
                <p>Account No: {account.acctNo}</p>
                <p>Account Balance: ₦{account.acctBal}</p>
                <p>Transfer to: { (account.transferToDemoBank) ? "Demo Bank" : " Other Banks" }</p>
                <Toggle> 
                    <input type="checkbox"  defaultChecked onChange={ () => setAccount( { ...account, transferToDemoBank: !account.transferToDemoBank} ) } />
                    <span class="slider round"></span>
                </Toggle>                
            </CardContainer>
            <>
            {(account.transferToDemoBank) ? <DemoBankTransfer /> : <OtherBanksTransfer /> }
            </>
        </ WrapStyle> 
    )
}

export default Transfer