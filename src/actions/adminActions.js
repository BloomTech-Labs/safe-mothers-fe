import axiosWithAuth from '../utilities/axiosWithAuth'

export const GET_USERS_START = "GET_USERS_START"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const GET_USERS_FAILURE = "GET_USERS_FAILURE"

export const EDIT_USERS_START = "EDIT_USERS_START"
export const EDIT_USERS_SUCCESS = "EDIT_USERS_SUCCESS"
export const EDIT_USERS_FAILURE = "EDIT_USERS_FAILURE"

export const DELETE_USERS_START = "DELETE_USERS_START"
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS"
export const DELETE_USERS_FAILURE = "DELETE_USERS_FAILURE"



export const SET_USERS = "SET_USERS"

export const getUsers =() => dispatch => {
    dispatch({type: GET_USERS_START})
    axiosWithAuth()
        .get(`${url}`)
        .then(res => {
            console.log("getUsers")
            dispatch({type: GET_USERS_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: GET_USERS_FAILURE, payload: err.response})
        });
};

export const editUsers = (url, id, object, dataType) => dispatch => {
    dispatch({type: EDIT_USERS_START})
    axiosWithAuth()
        .put(`${url}${id}`, object)
        .then(res => {
            dispatch({type: EDIT_USERS_SUCCESS, payload: id, data: dataType, newObj: {...object, id}})
        })
        .catch(err => {
            dispatch({type: EDIT_USERS_FAILURE, payload: err.response})
        })
}

export const deleteUsers = (url, id, dataType) => dispatch => {
    dispatch({type: DELETE_USERS_START})
    axiosWithAuth().delete(`${url}${id}`)
        .then(res => {
            dispatch({type: DELETE_DATA_SUCCESS, payload: id, data: dataType})
        })
        .catch(err => {
            dispatch({type: DELETE_DATA_FAILURE, payload: err.response})
        })
}


export const getUsers = (id) => dispatch => {
    dispatch({type: SET_USERS, payload: id})
}