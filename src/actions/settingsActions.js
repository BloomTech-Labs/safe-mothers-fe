import axiosWithAuth from "../utilities/axiosWithAuth"
import {types} from "./index";

const {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
} = types;


export const getUsers = () => dispatch => {
    dispatch({type: GET_USERS_START});
    axiosWithAuth()
        .get("/users/")
        .then(res => {
            dispatch({type: GET_USERS_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: GET_USERS_FAILURE, payload: error}))
};



