import axiosWithAuth from "../utilities/axiosWithAuth";
import {types} from "./index";

export const  LOGIN_START = "LOGIN_START"

export const loginUser = (data) => {
    return dispatch => {
        dispatch({type: types.LOGIN_START});
        return axiosWithAuth()
            .post("/auth/login", data)
            .then(res => {
                dispatch({type: types.LOGIN_SUCCESS, payload:res.data })
            })
            .catch(err => {
                dispatch({type: types.LOGIN_FAILURE, payload: err.response})
            });
    };
};