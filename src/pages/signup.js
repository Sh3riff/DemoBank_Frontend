import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { proxy } from '../utilities';
import { WrapStyle, FormContainer, ValidationError} from '../styledComponents/GlobalStyles';
import { LoadContext } from '../contexts';
import Loader from '../components/loader';


const Signup = () => {

    const { pageload, onPageload, onError, clearError, onComplete } = useContext(LoadContext);

    const initialValues = {
        lastname:"",
        firstname:"",
        email: "",
        phone: "",
        password: "",
        password2: ""
    };

    const validationSchema = Yup.object({
        lastname: Yup.string().required('required'),
        firstname: Yup.string().required('required'),
        email: Yup.string().email("invalid email format").required('required'),
        phone: Yup.number().required('required'),
        password: Yup.string().matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/, "password should be 6 or more alphanmeric character").required('required'),
        password2: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required('required')
    })

    const onSubmit = async (values) => {
        onPageload();
        try{
            const pageRequest = await axios.post(`${proxy}/auth/register`, values);
            const { status, message } = pageRequest.data;
            if(status === "error")  return onError(message);
            return onComplete();
        }
        catch(error) {
            onError("Registeration error, please try again.");
        };
    }

    if(pageload.isLoading) return <WrapStyle><Loader/></WrapStyle>
    if(pageload.RequestSuccess) return <Redirect to="./registered" />

    return (
        <WrapStyle>
            <FormContainer>
                <h1>Create Account</h1>
                <span className="error">{pageload.RequestErrorMsg}</span>
                <Formik 
                    initialValues={initialValues} 
                    validationSchema={validationSchema}
                     onSubmit={ onSubmit }  >
                    <Form>
                        <label>Last Name                        
                            <Field type="text" name="lastname"  required placeholder="LastName" autoComplete="family-name" onClick={clearError}/>
                            <ErrorMessage name="lastname" component={ValidationError}/>                            
                        </label>
                        <label>First Name                        
                            <Field type="text" name="firstname"  required placeholder="FirstName" autoComplete="given-name" onClick={clearError}/>
                            <ErrorMessage name="firstname" component={ValidationError}/>
                        </label>
                        <label>Email                        
                            <Field type="text" name="email"  required placeholder="Enter valid Email" autoComplete="email" onClick={clearError}/>
                            <ErrorMessage name="email" component={ValidationError}/>
                        </label>
                        <label>Phone Number                        
                            <Field type="tel" name="phone"  required placeholder="Enter valid Phone Number" autoComplete="tel" onClick={clearError}/>
                            <ErrorMessage name="phone" component={ValidationError}/>
                        </label>
                        <label>Password                        
                            <Field type="password" name="password" required placeholder="Enter your password" autoComplete="new-password" onClick={clearError}/>
                            <ErrorMessage name="password" component={ValidationError}/>
                        </label>
                        <label>Confirm password                        
                            <Field type="password" name="password2"  placeholder="Enter your password" autoComplete="new-password" onClick={clearError}/>
                            <ErrorMessage name="password2" component={ValidationError}/>
                        </label>
                        <button type="submit" >REGISTER</button>
                    </Form>
                </Formik>
                <div>
                    <span>Already registered?</span>
                    <NavLink to={"/login"}>login</NavLink>
                </div>
                
            </FormContainer>
        </WrapStyle>
    )
}

export default Signup
