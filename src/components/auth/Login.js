import React from 'react';
import {Link} from "react-router-dom";
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import Logo from './WhatsApp Image 2019-10-20 at 5.31 1.svg'
import SVG from 'react-inlinesvg/lib/index';
import styled from 'styled-components';
import './Login.css';
import Map from "./Map";

const Container = styled.div`
    justify-items: center;
    display: flex;
    justify-content: center;
    background: lightgray;
`;

const ImageContainer = styled.div`
    width: 60%;
    height: 100%;
`;

const AuthContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    justify-content: flex-start;
`;

const FormContainer = styled(Form)`
    display: flex;
    align-items: center;
    max-width: 300px;
    flex-direction: column;
`;

const Svg = styled(SVG)`
    width: 90%;
    height: 30%;
`;

const Error = styled.p`
    color: red;
    font-size: 0.7rem;
`;

const Submit = styled.button`
    width: 122px;
    height: 48px;
    margin: 40px;
    background: #F9FBFC;
`;


const LoginForm = (props) => {
    return (
        <>
            <Container>
                <ImageContainer>
                    <Map/>
                </ImageContainer>
                <AuthContainer>
                    <Svg src={Logo}/>
                    <FormContainer>
                        <h1>Safe Mothers, Safe Babies</h1>
                        <h2>Login</h2>
                        <label>Username</label>
                        <Field type="text" name="username" placeholder="username..."/>
                        {props.touched.username && props.errors.username && (
                            <Error>{props.errors.username}</Error>
                        )}
                        <label>Password</label>
                        <Field type="password" name="password" placeholder="password.."/>
                        {props.touched.password && props.errors.password && (
                            <Error>{props.errors.password}</Error>
                        )}
                        <div className="buttonContainer">
                            <Submit type="submit">Login</Submit>
                            <p>First time user? <Link to="/registration">Register</Link></p>
                        </div>
                    </FormContainer>
                </AuthContainer>
            </Container>
        </>
    );
};


const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter a username'),
        password: Yup.string().required('Enter a password')
    }),

    handleSubmit(values, {props}) {
        props.loginUser(values, props.history);
    }
})(LoginForm);

const mapStateToProps = state => {
    return {
        token: state.token

    };
};


export default connect(
    mapStateToProps,
    {loginUser}
)(FormikLoginForm);
