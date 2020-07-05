import axios from 'axios';
import proxy from './proxy';

const fetchAccountDetails = async (account, setAccount, onPageload, loadReset) => {
    if(account.acctNo) return;
    const preToken = JSON.parse(window.localStorage.getItem('authState'));
    const token = preToken && preToken.accessToken.slice(7);
    try {
        onPageload()
        const value =  await axios.get(`${proxy}/user/accountDetails/${token}`);
        const { firstName, lastName, acctNo, acctBal, acctHistory, email, phone, role, creditCard } = value.data.message;
        setAccount({...account, firstName, lastName, acctNo, acctBal, acctHistory, email, phone, role, creditCard });
        return loadReset()
    } catch (error) {
        return console.log(error)
    }
}

export default fetchAccountDetails
