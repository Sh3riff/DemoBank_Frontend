import React, { useState, useContext  } from 'react';
import { LoadContext } from '../contexts';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { proxy, requestHeader} from '../utilities';
import { FormContainer, ValidationError } from '../styledComponents/GlobalStyles';

const DemoBankTransfer = (props) => {

    const initialValues = {
        bank: "Demo Bank",
        receiver: "",
        amount: ""
    };

    const [verifiedName, setVerifiedName] = useState("");
    const { pageload, onError, clearError, onComplete } = useContext(LoadContext);

    const validationSchema = Yup.object({
        bank: Yup.string().required('select a bank'),
        receiver: Yup.number().required('provide receiving account number'),
        amount: Yup.number().min(100, `you can't transfer less than ₦100`).required('provide amount')
    })

    const onSubmit = async (values) => {
        if(values.amount > props.availableBalance) return onError("insufficient Balance!");
        try{
            const pageRequest = await axios.patch(`${proxy}/user/transfer`, values, { headers: requestHeader });
            const { status, message} = pageRequest.data;
            if(status === "error")  return onError(message);
            (function () {window.location.reload(false)})();
            return onComplete("Transaction successful");
        }
        catch(error) {
            onError("Transaction Error, try again.");
        }
    };

    const verifyAccount = (inputtedAccount) => {
        axios.get(`${proxy}/user/verifyAccount/${inputtedAccount}`, { headers: requestHeader })
            .then(value => {
                console.log(value)
                setVerifiedName(value.data.name)
            })
            .catch(setVerifiedName("account number cant be verified"))
    }

    return (
        <FormContainer full>
            <h1>Transfer to Demo Bank</h1>
            <span className="error">{pageload.RequestErrorMsg || pageload.RequestSuccessMsg}</span>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ onSubmit }
                >
                <Form>                     
                    <label>Account Number                        
                        <Field type="number" name="receiver" placeholder="Recievers account Number" onClick={clearError} onBlur={(e) => verifyAccount(e.target.value)}/>
                        <ErrorMessage name="receiver" component={ValidationError}/>
                    </label>
                    <div>{verifiedName}</div>
                    <label>Amount                        
                        <Field type="number" name="amount" placeholder="0.00" onClick={clearError}/>
                        <ErrorMessage name="amount" component={ValidationError}/>
                    </label>
                    <button type="submit" >Transfer</button>
                </Form>
            </Formik>
        </FormContainer>
    )
}

export default DemoBankTransfer
