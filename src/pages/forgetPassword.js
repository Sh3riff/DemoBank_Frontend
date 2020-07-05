import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import { WrapStyle, FormContainer, ValidationError} from '../styledComponents/GlobalStyles';
import {LoadContext} from '../contexts/loadContext';
import Loader from '../components/loader';

const ForgetPassword = () => {

    const { pageload, clearError } = useContext(LoadContext);

    const initialValues = {
        email: ""
    };
    
    const onSubmit = async (values) => {
        console.log("nothing!")
        // onPageload();
        // try{
        //     const pageRequest = await axios.post('/login', values);
        //     const { status, message } = pageRequest.data;
        //     if(status === "error")  return onError(message);
        //     return onComplete();
        // }
        // catch(error) {
        //     onError("Error, please try again.");
        // };
    };
    
    const validationSchema = Yup.object({
        email: Yup.string().email("invalid email format").required('required'),
    })

    if(pageload.isLoading) return <WrapStyle><Loader/></WrapStyle>
    if(pageload.RequestSuccess) return <Redirect to="./login" />

    return (
        <WrapStyle>
            <FormContainer>
                <h1>Reset Password</h1>
                <span className="error">{pageload.RequestErrorMsg}</span>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} onClick={clearError}>
                    <Form>
                        <label>Email                        
                            <Field type="text" name="email" required placeholder="Enter registered Email" autoComplete="email"/>
                            <ErrorMessage name="email" component={ValidationError}/>
                        </label>
                        <button type="submit">RESET</button>
                    </Form>
                </Formik>
                <div><NavLink to={"/login"}>login</NavLink></div>
                   
            </FormContainer>
        </WrapStyle>
    )
}

export default ForgetPassword
