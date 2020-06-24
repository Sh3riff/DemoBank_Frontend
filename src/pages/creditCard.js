import React, {useContext } from 'react';
import { WrapStyle, Button } from '../styledComponents/GlobalStyles';
import { LoadContext, AccountContext } from '../contexts';
import Loader from '../components/loader';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = () => {

    const { pageload } = useContext(LoadContext);
    const { account, setAccount} = useContext(AccountContext);

    const flipCard = () => {
        if(!account.creditCard.focused){
            return setAccount( { ...account, creditCard:{...account.creditCard, focused:"cvc" } } )
        }else{
            setAccount( { ...account, creditCard:{...account.creditCard, focused:"" } } )
        }
    }

    if(pageload.isLoading) return <Loader/>;
    return (
        <WrapStyle auth>
          <Cards
            name={`${account.firstName} ${account.lastName}`}
            cvc={account.creditCard.cvc}
            expiry={account.creditCard.exp}
            number={account.creditCard.number}
            focused={account.creditCard.focused}
          />
          <Button onClick={ flipCard }>Flip Card</Button>
        </WrapStyle>
      );
}

export default CreditCard;