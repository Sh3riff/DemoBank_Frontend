import React, { useContext } from 'react';
import { WrapStyle, CardContainer, Toggle } from '../styledComponents/GlobalStyles';
import { LoadContext, AccountContext } from '../contexts';
import { Loader, DemoBankTransfer, OtherBanksTransfer }from '../components';

const Transfer = () => {

    const { pageload,  onError, clearError, onComplete, } = useContext(LoadContext);
    const { account, setAccount } = useContext(AccountContext); 

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
            {(account.transferToDemoBank) ? 
                <DemoBankTransfer availableBalance={account.acctBal} sender={account.acctNo} onError={onError} onComplete={onComplete} clearError={clearError}/> : 
                <OtherBanksTransfer availableBalance={account.acctBal} sender={account.acctNo} onError={onError} onComplete={onComplete} clearError={clearError}/>
            }
            </>
        </ WrapStyle>
    )
}

export default Transfer