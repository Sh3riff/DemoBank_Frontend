import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, ValidationError } from '../styledComponents/GlobalStyles';
import { LoadContext } from '../contexts';
import axios from 'axios';
import { proxy, requestHeader} from '../utilities';

const UpdatePassword = (props) => {

    const { pageload, onPageload, onError, clearError, onComplete } = useContext(LoadContext);

    const initialValues = {
        oldpassword: "",
        newpassword: "",
        newpassword2: ""
    };

    const validationSchema = Yup.object({
        oldpassword: Yup.string().matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/, "password should be 6 or more alphanmeric character").required('required'),
        newpassword: Yup.string().matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/, "password should be 6 or more alphanmeric character").required('required'),
        newpassword2: Yup.string().oneOf([Yup.ref("newpassword"), null], "Passwords must match").required('required')
    })

    const onSubmit = async (values) => {
        onPageload();
        try{
            const pageRequest = await axios.patch(`${proxy}/user/updatePassword`, values, { headers: requestHeader } );
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
            <h1>Change Password</h1>
            <span className="error">{pageload.RequestErrorMsg || pageload.RequestSuccessMsg}</span>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ onSubmit }
                >
                <Form>                    
                <label>Old Password                        
                    <Field type="password" name="oldpassword"  placeholder="Enter old password" autoComplete="new-password" onClick={clearError}/>
                    <ErrorMessage name="oldpassword" component={ValidationError}/>
                </label>
                <label>New Password                        
                    <Field type="password" name="newpassword" placeholder="Enter new password" autoComplete="new-password" onClick={clearError}/>
                    <ErrorMessage name="newpassword" component={ValidationError}/>
                </label>
                <label>Confirm New Password                        
                    <Field type="password" name="newpassword2"  placeholder="Confirm new password" autoComplete="new-password" onClick={clearError}/>
                    <ErrorMessage name="newpassword2" component={ValidationError}/>
                </label>
                    <button type="submit" >Update Password</button>
                </Form>
            </Formik>
        </FormContainer>
    )
}

export default UpdatePassword
