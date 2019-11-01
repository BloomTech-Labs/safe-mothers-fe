import React, {useState, useEffect} from "react";
import {Form, Field, withFormik, Formik} from "formik/dist/index";
import * as Yup from "yup";
import {connect} from "react-redux";
import {registerUser} from "../../../actions/authActions";
import {FormItems, Button} from "../../reusableParts/form-items";
import {SettingsForm} from "../setting-style";

const RegistrationForm = props => {
    return (
        <>
                <FormItems>
                    <SettingsForm>
                    <div className="form-container">
                        <h1 className="title">Register a New User</h1>
                        <Form>
                            <div className="inline">
                                <div className="labels">
                                    <ul>
                                        <li>First Name</li>
                                        <li>Last Name</li>
                                        <li>Username</li>
                                        <li>Password</li>
                                    </ul>
                                </div>
                                <div>
                                    <Field className="regular-input" type="text" name="first_name"/>
                                    {props.touched.first_name && props.errors.first_name && (
                                        <p className="errormessage">{props.errors.first_name}</p>
                                    )}
                                    <Field className="regular-input" type="text" name="last_name"/>
                                    {props.touched.last_name && props.errors.last_name && (
                                        <p className="errormessage">{props.errors.last_name}</p>
                                    )}
                                    <Field className="regular-input" type="text" name="username"/>
                                    {props.touched.username && props.errors.username && (
                                        <p className="errormessage">{props.errors.username}</p>
                                    )}
                                    <Field className="regular-input" type="password" name="password"/>
                                    {props.touched.password && props.errors.password && (
                                        <p className="errormessage">{props.errors.password}</p>
                                    )}
                                </div>
                            </div>
                            <div className="btn-container">
                                <button className="submit-btn" type="submit">Submit</button>
                            </div>
                        </Form>
                    </div>
                    </SettingsForm>
                </FormItems>
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