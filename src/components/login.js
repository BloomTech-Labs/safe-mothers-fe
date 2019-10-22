import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import './Login.css';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 500,
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     marginTop: '300px',
//     width: '400px'
//   },
//   media: {
//     height: 200
//   },
//   btn: {
//     marginTop: '30px',
//     background: 'orange'
//   },
//   error: {
//     color: 'red',
//     fontSize: '.9rem'
//   }
// });
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
// const mapStateToProps = state => {
//   return {
//     newUser: state.newUser
//   };
// };

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
  handleSubmit(values, { props, setStatus }) {
    console.log('Submit', values);
    axios
      .post('https://finding-planets.herokuapp.com/auth/login', values)
      .then(res => {
        console.log('res', res);
        localStorage.setItem('token', res.data.token);

        props.setUserId(res.data.id);
        setStatus(res.data.id);
        props.storeUserId(res.data.id);
        props.isLoggedIn(true);
      })
      .then(res => {
        // if (props.newUser == true) {
        //   props.history.history.push('/createprofile');
        // } else {
        //   props.history.history.push('./AppPage');
        // }
        props.history.push('./');
      })

      .catch(err => console.log(err));
  }
})(LoginForm);

export default FormikLoginForm;

// export default connect(
//   mapStateToProps,
//   { storeUserId, isLoggedIn }
// )(FormikLoginForm);
