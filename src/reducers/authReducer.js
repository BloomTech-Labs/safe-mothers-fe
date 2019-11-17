import {types} from "../actions/index";

const {
    LOGOUT,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ERROR_CLEAN,

} = types;

const initialState = {
    token: '',
    user: [],
    isAuth: !!localStorage.getItem("token"),
    isLoading: false,
    isSuccess: false,
    error: "",
};

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                error: "",
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                isAuth: true,
                isLoading: false,

                token: payload.token,
                isSuccess: true,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case ERROR_CLEAN:
            return {
                ...state,
                error:  ''
            };
        case LOGOUT:
            return {
                ...state,
                error: "",
                isLoading: false,
                isAuth: false,
            };
        default:
            return state;
    }
};

export default authReducer;