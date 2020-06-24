import React, { useContext } from 'react';
import { WrapStyle, CardContainer, Transactions } from '../styledComponents/GlobalStyles';
import { v4 as uuidv4 } from 'uuid';
import { LoadContext, AccountContext } from '../contexts';
import Loader from '../components/loader';


const Home = () => {

    const { pageload } = useContext(LoadContext);
    const { account } = useContext(AccountContext);

    if(pageload.isLoading) return <Loader/>;
    return (
        <WrapStyle auth>
                <CardContainer>
                    <div><h1>Account Detail</h1></div>
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
