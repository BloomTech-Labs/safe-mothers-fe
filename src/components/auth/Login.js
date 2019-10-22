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

    .map {
        width: 60%; 
    }

    .form-container{
        width: 40%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: white;
        align-items: center;
        justify-content: flex-start;
    }

    .svg-logo{
        width: 90%;
        height: 30%;
    }

    .form-contents{
        display: flex;
        align-items: center;
        max-width: 300px;
        flex-direction: column;

        label{
            text-align: left;
            margin-bottom: 7%;
        }

    }

    .error-message{
        color: red;
        font-size: 0.7rem;
    }

    .btn-container {
        display:flex;
        justify-content: space-between;
    }

    .form-inputs{
        background:  ${props => props.theme.primary.darkGray};
        outline: none;
        width: 381px;
        height: 48px;
        border-radius: 2px;
        border-width:0px;
        border:none;
        padding-left: 12px;  
    }

    .login-btn{
        color: black;
        width: 122px;
        height: 48px;
        margin: 40px;
        background:  ${props => props.theme.primary.darkGray};
        
        &:hover {
            background:  ${props => props.theme.primary.gray};
        }
    }
`;




const LoginForm = (props) => {
    return (
        <>
            <Container className="container">
                <div className="map">
                    <Map/>
                </div>
                <div className="form-container">
                    <SVG className="svg-logo" src={Logo}/>
                    <Form className="form-contents">
                        <h1>Safe Mothers, Safe Babies</h1>
                        <label>Username
                            <Field className="form-inputs" type="text" name="username" placeholder="username..."/>
                            {props.touched.username && props.errors.username && (
                                <p className ="error-message">{props.errors.username}</p>
                            )}
                        </label>
                        <label>Password
                            <Field className="form-inputs" type="password" name="password" placeholder="password.."/>
                            {props.touched.password && props.errors.password && (
                            <p className ="error-message">{props.errors.password}</p>
                        )}
                        </label>
                        <div className="btn-container">
                            <Button className="login-btn" color="primary" type="submit">Login</Button>
                        </div>
                    </Form>
                </div>
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
