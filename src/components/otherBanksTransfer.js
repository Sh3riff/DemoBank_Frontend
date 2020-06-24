import React, { useState, useContext  } from 'react';
import { LoadContext } from '../contexts';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FormContainer, ValidationError, Select } from '../styledComponents/GlobalStyles';
import { proxy, requestHeader} from '../utilities';

const OtherBanksTransfer = (props) => {

    const initialValues = {
        bank: "",
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
            const pageRequest = await axios.patch(`${proxy}/user/transfer/${props.sender}`, values, { headers: requestHeader } );
            console.log(pageRequest)
            (function () {window.location.reload(false)})();
            return onComplete("Transaction successful");
        }
        catch(error) {
            onError("Transaction Error, try again.");
        }
    };

    const verifyAccount = () => setVerifiedName(`cannot verify for other banks, kindly continue transaction`) 

    return (
        <FormContainer full>
            <h1>Transfer to Other Banks</h1>
            <span className="error">{pageload.RequestErrorMsg || pageload.RequestSuccessMsg}</span>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ onSubmit }
                >
                <Form>
                    <label>                       
                        <Field as={Select} name="bank" onClick={props.clearError}>
                            <option>Select a bank </option>
                            <option value="Access Bank">Access Bank </option>
                            <option value="Citibank">Citibank</option>
                            <option value="Ecobank">Ecobank </option>
                            <option value="Fidelity Bank ">Fidelity Bank </option>
                            <option value="FIRST BANK">FIRST BANK</option>
                            <option value="FCMB">FCMB</option>
                            <option value="Globus Bank">Globus Bank</option>
                            <option value="GTBank">GTBank </option>
                            <option value="Heritage Bank">Heritage Bank </option>
                            <option value="Jaiz Bank">Jaiz Bank </option>
                            <option value="Key Stone Bank">Key Stone Bank </option>
                            <option value="Polaris Bank">Polaris Bank </option>
                            <option value="Providus Bank">Providus Bank </option>
                            <option value="Stanbic IBTC">Stanbic IBTC</option>
                            <option value="Standard Chartered">Standard Chartered </option>
                            <option value="Sterling Bank">Sterling Bank </option>
                            <option value="SunTrust Bank">SunTrust Bank</option>
                            <option value="Zenith Bank">Zenith Bank </option>
                            <option value="Titan Trust">Titan Trust</option>
                            <option value="Union Bank">Union Bank </option>
                            <option value="UBA">UBA </option>
                            <option value="Unity Bank">Unity Bank</option>
                            <option value="Wema">Wema</option>
                        </Field>
                        <ErrorMessage name="bank" component={ValidationError}/>
                    </label>                     
                    <label>Account Number                        
                        <Field type="number" name="receiver" placeholder="Recievers account Number" onClick={clearError} onBlur={verifyAccount}/>
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

export default OtherBanksTransfer
