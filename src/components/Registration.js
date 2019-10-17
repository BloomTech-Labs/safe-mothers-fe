import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik, Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

import "./Login.css";

const RegistrationForm = props => {
  return (
    <>
      <div className="container">
        <div className="imageContainer"></div>

        <div className="loginCard">
          <Form className="formContainer">
            <h1>Safe Mothers, Safe Babies</h1>
            <h2>Register</h2>
            <label>First Name</label>
            <Field type="text" name="first_name" placeholder="First Name..." />
            {props.touched.first_name && props.errors.first_name && (
              <p className="errormessage">{props.errors.first_name}</p>
            )}
            <label>Last Name</label>
            <Field type="text" name="last_name" placeholder="Last Name..." />
            {props.touched.last_name && props.errors.last_name && (
              <p className="errormessage">{props.errors.last_name}</p>
            )}
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
            <div className="buttonContainer">
              <button type="submit">Register</button>
              <p>
                Already have an account? <Link to="/registration">Log In</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ first_name, last_name, username, password }) {
    return {
      first_name: first_name || "",
      last_name: last_name || "",
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    first_name: Yup.string().required("Please enter a first name"),
    last_name: Yup.string().required("Please enter a last name"),
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Enter a password")
  }),

  handleSubmit(values, formikBag) {
    formikBag.props.registerUser(values);
    formikBag.props.history.push("/dashboard");
  }
})(RegistrationForm);


export default connect(
  null,
  { registerUser }
)(FormikRegistrationForm);
