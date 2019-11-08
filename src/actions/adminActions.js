import axiosWithAuth from '../utilities/axiosWithAuth'
import {types} from './index'

const {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    EDIT_USERS_START,
    EDIT_USERS_SUCCESS,
    EDIT_USERS_FAILURE,
    DELETE_USERS_START,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_FAILURE,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
} = types;


export const getUsers = () => dispatch => {
    dispatch({type: GET_USERS_START});
    axiosWithAuth()
        .get(`/users/`)
        .then(res => {
            dispatch({type: GET_USERS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: GET_USERS_FAILURE, payload: err.response})
        });
};

export const editUsers = (id, object) => dispatch => {
    dispatch({type: EDIT_USERS_START});
    axiosWithAuth()
        .put(`/users/${id}`, object)
        .then(res => {
            dispatch({type: EDIT_USERS_SUCCESS, payload: object})
        })
        .catch(err => {
            dispatch({type: EDIT_USERS_FAILURE, payload: err.response})
        })
};

export const deleteUsers = (id) => dispatch => {
    dispatch({type: DELETE_USERS_START});
    axiosWithAuth().delete(`/users/${id}`)
        .then(res => {

            dispatch({type: DELETE_USERS_SUCCESS, payload: id})
        })
        .catch(err => {
            dispatch({type: DELETE_USERS_FAILURE, payload: err.response})
        })
};

export const createUser = data => dispatch => {
    dispatch({ type: CREATE_USER_START });
    return axiosWithAuth()
        .post("/auth/register", data)
        .then(res => {
            dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({type: CREATE_USER_FAILURE, payload: err});
        })
};


