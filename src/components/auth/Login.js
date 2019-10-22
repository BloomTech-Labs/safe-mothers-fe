import React from 'react';
import {Link} from "react-router-dom";
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
import Logo from './WhatsApp Image 2019-10-20 at 5.31 1.svg'
import SVG from 'react-inlinesvg/lib/index';
import styled from 'styled-components';
import {Button} from 'pcln-design-system'
import './Login.css';
import Map from "./Map";

const Container = styled.div`
    justify-items: center;
    display: flex;
    justify-content: center;
    background: #282E74;
`;

const ImageContainer = styled.div`
    width: 60%;
`;

const AuthContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: white;
    align-items: center;
    justify-content: flex-start;
`;

const FormContainer = styled(Form)`
    display: flex;
    align-items: center;
    max-width: 300px;
    flex-direction: column;

    label{
        text-align: left;
    }
`;

const Svg = styled(SVG)`
    width: 90%;
    height: 30%;
    
`;

const Error = styled.p`
    color: red;
    font-size: 0.7rem;
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

const Submit = styled(Button)`
    width: 122px;
    height: 48px;
    margin: 40px;
    background:  ${props => props.theme.primary.darkGray};
    &:hover {
       background:  ${props => props.theme.primary.gray};
    }
`;

const SignUp = styled(Submit)`
    background:  ${props => props.theme.primary.lightGray};
    border: 3px solid  ${props => props.theme.primary.darkGray};
    &:hover {
        border: 3px solid  ${props => props.theme.primary.gray};
        background:  ${props => props.theme.primary.darkGray};
    }
`;

const Input = styled(Field)`
    background:  ${props => props.theme.primary.darkGray};
    outline: none;
    width: 381px;
    height: 48px;
    border-radius: 2px;
    border-width:0px;
    border:none;
    padding-left: 12px;
`;

const LoginForm = (props) => {
    return (
        <>
            <Container className="login-component">
                <ImageContainer>
                    <Map/>
                </ImageContainer>
                <AuthContainer>
                    <Svg src={Logo}/>
                    <FormContainer>
                        <h1>Safe Mothers, Safe Babies</h1>
                        <h2>Login</h2>
                        <label>Username
                            <Input type="text" name="username" placeholder="username..."/>
                           {props.touched.username && props.errors.username && (
                                <Error>{props.errors.username}</Error>
                            )}
                        </label>
                        <label>Password
                        <Input type="password" name="password" placeholder="password.."/>
                        {props.touched.password && props.errors.password && (
                            <Error>{props.errors.password}</Error>
                        )}
                        </label>
                        <ButtonContainer>
                            <Submit color="primary" type="submit">Login</Submit>
                            <SignUp color="primary" type="submit"> <Link to="/registration">Sign up</Link></SignUp>
                        </ButtonContainer>
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
