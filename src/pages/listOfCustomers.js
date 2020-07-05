import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WrapStyle } from '../styledComponents/GlobalStyles';
import { v4 as uuidv4 } from 'uuid';
import { LoadContext } from '../contexts';
import Loader from '../components/loader';
import axios from 'axios';
import { proxy } from '../utilities';


const Card = styled.div`
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.red};
  border-radius: 5vmin;
  max-width: 90vw;
  min-width: 75vw;    
  margin-bottom: 3vmin;
  padding: 5vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p{
    font-size: calc(0.875rem + ((1vw - 3.75px) * 1.0091));     
  }
  li{
    font-size: calc(0.75rem + ((1vw - 3.75px) * 0.4036));
    padding: 0 3vmin;
  }
`;

const Label = styled.div`
    background-color: ${props => props.theme.color.red};
    align-self: center;
    position: relative;
    border-radius: 2vw;
    margin-bottom: 5vmin;
    h1{
        color: ${props => props.theme.color.white};
        margin: 3vmin;
        font-size: calc(0.7 * (1.5rem + ((1vw - 3.75px) * 3.6327)));
    }
`;

const ListofCustomers = () => { 
    const { pageload, onPageload, loadReset } = useContext(LoadContext);
    const [customers, setCustomers] = useState([])

    useEffect(() => {
      (async () => {
        try {
            onPageload()
            const value =  await axios.get(`${proxy}/user/allCustomerAccount`);
            setCustomers(value.data.data)
            return loadReset()
        } catch (error) {
            return console.log(error)
        }
      })()
    }, []);

    if(pageload.isLoading) return <Loader/>;
    return (
        <WrapStyle auth>
          <Label>
            <h1>{customers.length} REGISTERED CUSTOMERS</h1>
          </Label>
            {customers.map(customer => 
              <Card key={uuidv4()}>
                <p>Name: {`${customer.firstName} ${customer.lastName}`}</p>
                <p>Acct No: {`${customer.acctNo}`}</p>
                <p>Acct Balance: {`${customer.acctBal}`}</p>
                <p>Email: {`${customer.email}`}</p>
                <p>Phone No: {`${customer.phone}`}</p>
                <p>Credit card:</p> 
                  <ul>
                    <li>No: {`${customer.creditCard.number}`}</li>
                    <li>Exp: {`${customer.creditCard.exp}`}</li>
                    <li>CVC: {`${customer.creditCard.cvc}`}</li>
                  </ul>
                <p>Reg Date: {`${customer.date.slice(0,10)}`}</p>
              </Card> 
            )}
        </WrapStyle>
    )
}

export default ListofCustomers
