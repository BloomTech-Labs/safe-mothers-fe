import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Form, Field, withFormik, Formik} from "formik/dist/index";
import * as Yup from "yup";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import {Container} from './auth-style'
import {Button} from 'pcln-design-system'
import "./Login.css";
import Map from "./Map";
import Logo from "./WhatsApp Image 2019-10-20 at 5.31 1.svg";
import SVG from "react-inlinesvg";

const RegistrationForm = props => {
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
                        <h2>Register</h2>
                        <label>First Name
                            <Field className="form-inputs" type="text" name="first_name" placeholder="First Name..."/>
                            {props.touched.first_name && props.errors.first_name && (
                                <p className="errormessage">{props.errors.first_name}</p>
                            )}
                        </label>
                        <label>Last Name
                            <Field className="form-inputs" type="text" name="last_name" placeholder="Last Name..."/>
                            {props.touched.last_name && props.errors.last_name && (
                                <p className="errormessage">{props.errors.last_name}</p>
                            )}
                        </label>
                        <label>Username
                            <Field className="form-inputs" type="text" name="username" placeholder="username..."/>
                            {props.touched.username && props.errors.username && (
                                <p className="errormessage">{props.errors.username}</p>
                            )}
                        </label>
                        <label>Password
                            <Field className="form-inputs" type="password" name="password" placeholder="password.."/>
                            {props.touched.password && props.errors.password && (
                                <p className="errormessage">{props.errors.password}</p>
                            )}
                        </label>
                        <div className="btn-container">
                            <Button className="submit-btn" type="submit">Register</Button>
                            <p className="arrow">
                               <Link to="/">&#8592;</Link>
                            </p>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    );
};

const FormikRegistrationForm = withFormik({
    mapPropsToValues({first_name, last_name, username, password}) {
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
    {registerUser}
)(FormikRegistrationForm);
