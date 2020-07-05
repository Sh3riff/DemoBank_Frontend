import React, { useState, createContext } from 'react';

export const AccountContext = createContext();

const AccountContextProvider = (props) => {

    const initialAccountState = {
        firstName: "",
        lastName: "",
        acctNo: "",
        acctBal: "",
        acctHistory: [],
        creditCard:{
            number: "",
            expiry: "",
            cvc: ""
        },
        email: "",
        phone:"",
        role:"",
        transferToDemoBank: true
    }

    const [account, setAccount] = useState(initialAccountState)
    
    return (
        <AccountContext.Provider value={{ account, setAccount, initialAccountState }}>
            {props.children}
        </AccountContext.Provider>
    )
};

export default AccountContextProvider
