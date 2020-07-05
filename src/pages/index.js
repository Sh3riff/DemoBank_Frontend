import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { WrapStyle, CardContainer, Transactions } from '../styledComponents/GlobalStyles';
import { v4 as uuidv4 } from 'uuid';
import { LoadContext, AccountContext } from '../contexts';
import Loader from '../components/loader';
import {fetchAccountDetails } from '../utilities';


const Home = () => {

    const { pageload, onPageload, loadReset } = useContext(LoadContext);
    const { account, setAccount } = useContext(AccountContext);

    useEffect(() => {
        fetchAccountDetails(account, setAccount, onPageload, loadReset)
    }, []);

    if(pageload.isLoading) return <Loader/>;
    return (
        <WrapStyle auth>
                <CardContainer>
                    { (account.role !== "admin") ? 
                        <div><h1>Account Detail</h1></div> :
                        <div><NavLink to='/customers'><h1>Account Detail</h1></NavLink></div>
                    }
                    <p>Account No: {account.acctNo}</p>
                    <p>Account Name: {`${account.firstName} ${account.lastName}`}</p>
                    <p>Available Balance: ₦{account.acctBal}</p>
                </CardContainer>
                <Transactions>
                    <h1>Transaction History</h1>
                    { (account.acctHistory.length === 0 ) ? 
                        <h3>No Recent Transactions</h3> :
                        <div>
                            {account.acctHistory.map(e => <p key={uuidv4()}> {e.type} of {e.amount} on {e.date} </p> )}
                        </div>
                    }
                </Transactions>
        </WrapStyle>
    )
}

export default Home
