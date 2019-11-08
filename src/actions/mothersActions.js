import axiosWithAuth from "../utilities/axiosWithAuth"


import {types} from "./index";

const {
    GET_MOTHERS_START,
    GET_MOTHERS_SUCCESS,
    GET_MOTHERS_FAILURE,

    GET_MOTHER_START,
    GET_MOTHER_SUCCESS,
    GET_MOTHER_FAILURE,

    ADD_MOTHERS_START,
    ADD_MOTHERS_SUCCESS,
    ADD_MOTHERS_FAILURE,

    UPDATE_MOTHER_START,
    UPDATE_MOTHER_SUCCESS,
    UPDATE_MOTHER_FAILURE,

    DELETE_MOTHERS_START,
    DELETE_MOTHERS_SUCCESS,
    DELETE_MOTHERS_FAILURE,
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

export const getMother = (id) => dispatch => {
    dispatch({type: GET_MOTHER_START});
    axiosWithAuth()
        .get(`/mothers/${id}`)
        .then(res => {
            dispatch({type: GET_MOTHER_SUCCESS, payload: res.data[0]})
        })
        .catch(error => dispatch({type: GET_MOTHER_FAILURE, payload: error}))
};

export const addMother = mothers => dispatch => {
    dispatch({type: ADD_MOTHERS_START});
    axiosWithAuth()
        .post('/mothers/auth/register', mothers)
        .then(res => dispatch({type: ADD_MOTHERS_SUCCESS}))
        .catch(err => dispatch({type: ADD_MOTHERS_FAILURE, payload: err.response}));
};

export const updateMother = (id, mother) => dispatch => {
    dispatch({type: UPDATE_MOTHER_START});
    axiosWithAuth()
        .put(`/mothers/${id}`, mother)
        .then(res => dispatch({type: UPDATE_MOTHER_SUCCESS, payload: mother}))
        .catch(err =>
            dispatch({type: UPDATE_MOTHER_FAILURE, payload: err.response}),
        );
};

export const deleteMothers = id => dispatch => {
    dispatch({type: DELETE_MOTHERS_START});
    axiosWithAuth()
        .delete(`/${id}`)
        .then(res =>{
          
             dispatch({type: DELETE_MOTHERS_SUCCESS})})
        .catch(err =>
            dispatch({type: DELETE_MOTHERS_FAILURE, payload: err.response}),
        );
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

export const deleteLabel = (id) => dispatch => {
    dispatch({type: DELETE_LABEL_START});
    axiosWithAuth()
        .delete(`/labels/${id}`)
        .then(res => {
            dispatch({type: DELETE_LABEL_SUCCESS, payload: id})
        })
        .catch(error => dispatch({type: DELETE_LABEL_FAILURE, payload: error}))
};