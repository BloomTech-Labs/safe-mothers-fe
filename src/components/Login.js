import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

import './Login.css';
import Map from "./Map";


const LoginForm = (props) => {
  return (
    <>
      <div className="container">
        <div className="imageContainer">
          <Map/>
        </div>

        <div className="loginCard">
          <Form className="formContainer">
            <h1>Safe Mothers, Safe Babies</h1>
            <h2>Login</h2>
            <label>Username</label>
            <Field type="text" name="username" placeholder="username..." />
            {props.touched.username && props.errors.username && (
              <p className="errormessage">{props.errors.username}</p>
            )}
            <label>Password</label>
            <Field type="password" name="password" placeholder="password.." />
            {props.touched.password && props.errors.password && (
              <p className="errormessage">{props.errors.password}</p>
            )}
    <div className = "buttonContainer">
            <button type="submit">Login</button>
            <p>First time user? <Link to="/registration">Register</Link></p>
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
  { loginUser }
)(FormikLoginForm);
