import React, { useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, ValidationError } from '../styledComponents/GlobalStyles';
import { LoadContext, AccountContext} from '../contexts';
import axios from 'axios';
import { proxy } from '../utilities';

const UpdateProfile = () => {

    const { pageload, onPageload, onError, clearError, onComplete } = useContext(LoadContext);
    const { account } = useContext(AccountContext);
    
    const initialValues = {
        accountNumber: account.acctNo,
        lastname: account.lastName,
        firstname: account.firstName,
        email: account.email,
        phone: account.phone
    };

    const validationSchema = Yup.object({
        lastname: Yup.string().required('required'),
        firstname: Yup.string().required('required'),
        email: Yup.string().email("invalid email format").required('required'),        
        phone: Yup.number().required('required'),
    })

    const onSubmit = async (values) => {
        onPageload();
        try{
            const pageRequest = await axios.patch(`${proxy}/user/updateProfile`, values);
            const { status, message} = pageRequest.data;
            if(status === "error")  return onError(message);
            (function () {window.location.reload(false)})();
            return onComplete(message);
        }
        catch(error) {
            onError("Server Error, try again");
        };
    };

    return (
        <FormContainer full>
            <h1>Update Profile</h1>
            <span className="error">{pageload.RequestErrorMsg || pageload.RequestSuccessMsg}</span>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                    onSubmit={ onSubmit }
                >
                <Form>
                    
                    <label>Account Number                        
                        <input type="text" value={account.acctNo} style={{color: "red"}}/>
                    </label>
                    <label>Last Name                        
                        <Field type="text" name="lastname"  placeholder="LastName" autoComplete="family-name" onClick={clearError}/>
                        <ErrorMessage name="lastname" component={ValidationError}/>                            
                    </label>
                    <label>First Name                        
                        <Field type="text" name="firstname"  placeholder="FirstName" autoComplete="given-name" onClick={clearError}/>
                        <ErrorMessage name="firstname" component={ValidationError}/>
                    </label>
                    <label>Email                        
                            <Field type="text" name="email"  placeholder="Enter valid Email" autoComplete="email" onClick={clearError}/>
                            <ErrorMessage name="email" component={ValidationError}/>
                    </label>
                    <label>Phone Number                        
                            <Field type="tel" name="phone"  required placeholder="Enter valid Phone Number" autoComplete="tel" onClick={clearError}/>
                            <ErrorMessage name="phone" component={ValidationError}/>
                    </label>
                    <button type="submit" >Update Profile</button>
                </Form>
            </Formik>
        </FormContainer>
    )
}

export default UpdateProfile
