import axiosWithAuth from "../utilities/axiosWithAuth"
import { Mixpanel } from '../utilities/mixpanel/Mixpanel';
import {types} from "./index";

const {
    GET_DRIVERS_START,
    GET_DRIVERS_SUCCESS,
    GET_DRIVERS_FAILURE,
    ADD_DRIVERS_START,
    ADD_DRIVERS_SUCCESS,
    ADD_DRIVERS_FAILURE,
    UPDATE_DRIVERS_START,
    UPDATE_DRIVERS_SUCCESS,
    UPDATE_DRIVERS_FAILURE,
    DELETE_DRIVERS_START,
    DELETE_DRIVERS_SUCCESS,
    DELETE_DRIVERS_FAILURE,

} = types;

export const getDrivers = () => dispatch => {
    dispatch({type: GET_DRIVERS_START});
    axiosWithAuth()
        .get("/drivers/")
        .then(res => {
            dispatch({type: GET_DRIVERS_SUCCESS, payload: res.data})
        })
        .catch(error => dispatch({type: GET_DRIVERS_FAILURE, payload: error}))

};

export const addDriver = driver => dispatch => {
    dispatch({type: ADD_DRIVERS_START});
    console.log("driver", driver);
    axiosWithAuth()
        .post('/drivers/register/', driver)
        .then(res => {
            Mixpanel.track('Added Driver')
            dispatch({type: ADD_DRIVERS_SUCCESS, payload: driver});
            console.log("res", res)
        })
        .catch(err => {
            Mixpanel.track('Error Adding Driver')
            dispatch({type: ADD_DRIVERS_FAILURE, payload: err.response})});
};

export const deleteDriver = (props, id) => dispatch => {
    dispatch({type: DELETE_DRIVERS_START});
    axiosWithAuth()
        .delete(`/drivers/${id}`)
        .then(res =>{ 
            Mixpanel.track('Deleted Driver', {id:id})
            dispatch({type: DELETE_DRIVERS_SUCCESS, payload: id})
            props.history.push('/drivers')
        })
        .catch(err =>{
            Mixpanel.track('Error Deleting Driver', {id:id})
            dispatch({type: DELETE_DRIVERS_FAILURE, payload: err.response})}
        );
};

export const updateDriver = (id, driver) => dispatch => {
    dispatch({type: UPDATE_DRIVERS_START});
    axiosWithAuth()
        .put(`/drivers/${id}`, driver)
        .then(res =>{ 
            Mixpanel.track('Updated Driver', {id:id})
            dispatch({type: UPDATE_DRIVERS_SUCCESS})})
        .catch(err =>{
            Mixpanel.track('Error Updating Driver', {id:id})
            dispatch({type: UPDATE_DRIVERS_FAILURE, payload: err.response})}
        );
};