import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { proxy } from '../utilities';
import axios from 'axios';
import { WrapStyle, FormContainer, ValidationError} from '../styledComponents/GlobalStyles';
import { AuthContext, LoadContext } from '../contexts';
import Loader from '../components/loader';


const Login = (props) => {

    const { pageload, onPageload, onError, clearError, loadReset } = useContext(LoadContext);
    const { setAuthState } = useContext(AuthContext);

    const referer = props.location.state || '/';

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("invalid email format").required('required'),
        password: Yup.string().matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/, "password should be 6 or more alphanmeric character").required('required')
    })

    const onSubmit = async (values) => {
        onPageload();
        try{
            const pageRequest = await axios.post(`${proxy}/auth/login`, values);
            const { status, message, accessToken, refreshToken } = pageRequest.data;
            if(status === "error")  return onError(message);
            setAuthState({ isAuthenticated: true, accessToken, refreshToken});
            window.location.reload();
            return loadReset();
        }
        catch(error) {
            onError("Login error, please try again.");
        };
    };

    if(pageload.isLoading) return <WrapStyle><Loader/></WrapStyle>;
    if(pageload.RequestSuccess) return <Redirect to={referer} />;

    return (
        <WrapStyle>
            <FormContainer>
                <h1>Login</h1>
                <span className="error">{pageload.RequestErrorMsg}</span>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                    <Form>
                        <label>Email                        
                            <Field type="text" name="email" required placeholder="Email address" autoComplete="email" onClick={clearError}/>
                            <ErrorMessage name="email" component={ValidationError}/>
                        </label>
                        <label>Password                        
                            <Field type="password" name="password" required placeholder="Enter your password"autoComplete="current-password" />
                            <ErrorMessage name="password" component={ValidationError}/>
                        </label>
                        <NavLink to={"/forgetpassword"}>Forget Password?</NavLink>
                        <button type="submit">LOGIN</button>
                    </Form>
                </Formik>
                <div>
                    <span>Don't have an account? </span>
                    <NavLink to={"/register"}>register</NavLink>
                </div>
                
            </FormContainer>
        </WrapStyle>
    )
}

export default Login
