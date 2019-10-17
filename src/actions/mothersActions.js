import axiosWithAuth from "../utilities/axiosWithAuth"
import {types} from "./index";

const {
    GET_MOTHERS_START,
    GET_MOTHERS_SUCCESS,
    GET_MOTHERS_FAILURE,
} = types;

export const getMothers = () => dispatch => {
    dispatch({type: GET_MOTHERS_START});
    axiosWithAuth()
        .get("/mothers/")
        .then(res => {
            dispatch({type: GET_MOTHERS_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: GET_MOTHERS_FAILURE, payload: error}))
};
