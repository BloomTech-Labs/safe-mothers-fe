import axiosWithAuth from "../utilities/axiosWithAuth";
import {types} from "./index";

export const  LOGIN_START = "LOGIN_START"

export const getUser = (data) => {
    return dispatch => {
        dispatch({type: types.LOGIN_START});
        axiosWithAuth
            .post("/auth/login", data)
            .then(res => {
                dispatch({type: types.LOGIN_SUCCESS, payload:res.data })
            })
            .catch(err => {
                dispatch({type: types.LOGIN_FAILURE, payload: err.response})
            });
    };
};