import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';

import './Login.css';


const LoginForm = (props, { status }) => {
  return (
    <>
      <div className="container">
        <div className="imageContainer"></div>

        <div className="loginCard">
          <Form className="formContainer">
            <h1>Safe Mothers, Safe Babies</h1>
            <h2>Login</h2>
            <label>Username</label>

            <Field type="text" name="username" placeholder="username..." />
            {props.touched.username && props.errors.username && (
              <p1 className="errormessage">{props.errors.username}</p1>
            )}
            <label>Password</label>
            <Field type="password" name="password" placeholder="password.." />
            {props.touched.password && props.errors.password && (
              <p1 className="errormessage">{props.errors.password}</p1>
            )}
    <div className = "buttonContainer">
            <button type="submit">Login</button>

            <button onClick={() => props.history.push('/Sign_Up')}>
              Register
    </button>
    </div>
          </Form>
        </div>
      </div>
    </>
  );
};


const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Enter a password')
  }),
  
  handleSubmit(values, formikBag) {
    formikBag.props.loginUser(values);
    formikBag.props.history.push("/dashboard");
  }
})(LoginForm);

// const mapStateToProps = state => {
//   return {
//     newUser: state.newUser
//   };
// };


export default connect(
  null,
  { loginUser }
)(FormikLoginForm);
