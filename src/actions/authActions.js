import axiosWithAuth from '../utilities/axiosWithAuth';
import { Mixpanel } from '../utilities/mixpanel/Mixpanel';
import { types } from './index';
const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT,
} = types;

export const loginUser = (data, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post('/auth/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        Mixpanel.track('Login Success');
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        history.push('/dashboard');
      })
      .catch(err => {
        Mixpanel.track('Login Error');
        dispatch({ type: LOGIN_FAILURE, payload: err.response });
      });
  };
};

export const registerUser = data => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  return axiosWithAuth()
    .post('/auth/register', data)
    .then(res => {
      Mixpanel.track('Register Success');
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      Mixpanel.track('Login Failed');
      dispatch({ type: REGISTER_USER_FAILURE, payload: err });
    });
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem('token');
  };
};
