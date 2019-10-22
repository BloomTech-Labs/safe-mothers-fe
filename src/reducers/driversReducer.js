import {types} from "../actions/index";

const {
    GET_DRIVERS_START,
    GET_DRIVERS_SUCCESS,
    GET_DRIVERS_FAILURE,
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
        default:
            return state;
    }
};

export default driversReducer;
