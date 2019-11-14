import {types} from "../actions/index";

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

const initialState = {
    isLoading: false,
    errors: null,
    isAuth: !!localStorage.getItem("token"),
    drivers: [],
};

const driversReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_DRIVERS_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case GET_DRIVERS_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                drivers: payload
            };
        case GET_DRIVERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
            case ADD_DRIVERS_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ADD_DRIVERS_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
            };
        case ADD_DRIVERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
            case UPDATE_DRIVERS_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case UPDATE_DRIVERS_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
            };
        case UPDATE_DRIVERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
            case DELETE_DRIVERS_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case DELETE_DRIVERS_SUCCESS:
                const delete_driver_from_list = state.drivers.filter(driver => driver.id !== payload);
            return {
                ...state,
                error: null,
                isLoading: false,
                drivers: delete_driver_from_list
            };
        case DELETE_DRIVERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        default:
            return state;
        }
};

export default driversReducer;
