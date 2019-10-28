import axiosWithAuth from "../utilities/axiosWithAuth"
import {types} from "./index";

const {
    GET_MOTHERS_START,
    GET_MOTHERS_SUCCESS,
    GET_MOTHERS_FAILURE,
    GET_LABELS_START,
    GET_LABELS_SUCCESS,
    GET_LABELS_FAILURE,
    CREATE_LABEL_START,
    CREATE_LABEL_SUCCESS,
    CREATE_LABEL_FAILURE,
    DELETE_LABEL_START,
    DELETE_LABEL_SUCCESS,
    DELETE_LABEL_FAILURE
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

export const createLabel = (values) => dispatch => {
    dispatch({type: CREATE_LABEL_START});
    axiosWithAuth()
        .post("/labels/", values)
        .then(res => {
            dispatch({type: CREATE_LABEL_SUCCESS, payload: res.data[0]})
        })
        .catch(error => dispatch({type: CREATE_LABEL_FAILURE, payload: error}))

};

export const getLabels = (id) => dispatch => {
    dispatch({type: GET_LABELS_START});
    axiosWithAuth()
        .get(`/labels/${id}`)
        .then(res => {
            dispatch({type: GET_LABELS_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: GET_LABELS_FAILURE, payload: error}))
};

export const deleteLabel = (id) => dispatch =>{
    dispatch({type: DELETE_LABEL_START});
    axiosWithAuth()
        .delete(`/labels/${id}`)
        .then(res => {
            dispatch({type: DELETE_LABEL_SUCCESS, payload: id})
        })
        .catch(error => dispatch({type: DELETE_LABEL_FAILURE, payload: error}))
};