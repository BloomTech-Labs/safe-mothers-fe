import axiosWithAuth from "../utilities/axiosWithAuth"
import {types} from "./index";

const {
    GET_DRIVERS_START,
    GET_DRIVERS_SUCCESS,
    GET_DRIVERS_FAILURE,
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