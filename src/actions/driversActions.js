import axiosWithAuth from "../utilities/axiosWithAuth"
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

export const addDrivers = driver => dispatch => {
    dispatch({ type: ADD_DRIVERS_START });
    console.log("driver", driver)
    axiosWithAuth()
      .post('/drivers/register/', driver)
      .then(res => {dispatch({ type: ADD_DRIVERS_SUCCESS, payload: res.data })
      console.log("res", res)})
      .catch(err => dispatch({ type: ADD_DRIVERS_FAILURE, payload: err.response }));
  };

  export const deleteDrivers = id => dispatch => {
    dispatch({ type: DELETE_DRIVERS_START });
    axiosWithAuth()
      .delete(`/${id}`)
      .then(res => dispatch({ type: DELETE_DRIVERS_SUCCESS }))
      .catch(err =>
        dispatch({ type: DELETE_DRIVERS_FAILURE, payload: err.response }),
      );
  };

  export const updateDrivers = (id, update) => dispatch => {
    dispatch({ type: UPDATE_DRIVERS_START });
    axiosWithAuth()
      .put(`/${id}`, update)
      .then(res => dispatch({ type: UPDATE_DRIVERS_SUCCESS }))
      .catch(err =>
        dispatch({ type: UPDATE_DRIVERS_FAILURE, payload: err.response }),
      );
  };