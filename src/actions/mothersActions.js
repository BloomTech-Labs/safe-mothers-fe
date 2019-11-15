import axiosWithAuth from "../utilities/axiosWithAuth"
import {Mixpanel} from '../utilities/mixpanel/Mixpanel'


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

    DELETE_MOTHER_START,
    DELETE_MOTHER_SUCCESS,
    DELETE_MOTHER_FAILURE,

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

export const addMother = (mothers, props) => dispatch => {
    dispatch({type: ADD_MOTHERS_START});
    axiosWithAuth()
        .post('/mothers/auth/register', mothers)
        .then(res => {
            Mixpanel.track('Added Mother');
            dispatch({type: ADD_MOTHERS_SUCCESS});
            props.history.push(`/mothers`);
        })
        .catch(err => {
            Mixpanel.track('Error Adding Mother');
            dispatch({type: ADD_MOTHERS_FAILURE, payload: err.response})
        });
};

export const updateMother = (id, mother, props) => dispatch => {
    dispatch({type: UPDATE_MOTHER_START});
    axiosWithAuth()
        .put(`/mothers/${id}`, mother)
        .then(res => {
            Mixpanel.track('Updated Mother', {id: 'id'});
            dispatch({type: UPDATE_MOTHER_SUCCESS, payload: mother});
            props.history.push(`/mothers/${id}`);
        })
        .catch(err => {
            Mixpanel.track('Error Updating Mother', {id: id});
            dispatch({type: UPDATE_MOTHER_FAILURE, payload: err.response})
        });
};

export const deleteMother = (id, props) => dispatch => {
    dispatch({type: DELETE_MOTHER_START});
    axiosWithAuth()
        .delete(`/mothers/${id}`)
        .then(res => {
            Mixpanel.track('Deleted Mother', {id: id});
            dispatch({type: DELETE_MOTHER_SUCCESS, payload: id});
            props.history.push('/mothers')
        })
        .catch(err => {
            Mixpanel.track('Error Deleting Mother', {id: id});
            dispatch({type: DELETE_MOTHER_FAILURE, payload: err.response})
        })
};


export const createLabel = (values) => dispatch => {
    dispatch({type: CREATE_LABEL_START});
    axiosWithAuth()
        .post("/labels/", values)
        .then(res => {
            console.log("label ", res);
            Mixpanel.track('Created Label');
            dispatch({type: CREATE_LABEL_SUCCESS, payload: res.data[0]})
        })
        .catch(error => {
            Mixpanel.track('Error Creating Label');
            dispatch({type: CREATE_LABEL_FAILURE, payload: error})
        })
};

export const getLabels = () => dispatch => {
    dispatch({type: GET_LABELS_START});
    axiosWithAuth()
        .get(`/labels/`)
        .then(res => {
            console.log("response ", res.data);
            dispatch({type: GET_LABELS_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: GET_LABELS_FAILURE, payload: error}))
};

export const deleteLabel = (id) => dispatch => {
    dispatch({type: DELETE_LABEL_START});
    axiosWithAuth()
        .delete(`/labels/${id}`)
        .then(res => {
            Mixpanel.track('Deleted Label', {id: id});
            dispatch({type: DELETE_LABEL_SUCCESS, payload: id})
        })
        .catch(error => {
            Mixpanel.track('Error Deleting Label', {id: id});
            dispatch({type: DELETE_LABEL_FAILURE, payload: error})
        })
};