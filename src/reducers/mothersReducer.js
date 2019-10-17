import {types} from "../actions/index";

const {
    GET_MOTHERS_START,
    GET_MOTHERS_SUCCESS,
    GET_MOTHERS_FAILURE,
} = types;

const initialState = {
    isLoading: false,
    errors: null,
    isAuth: !!localStorage.getItem("token"),
    mothers: [],
};

const mothersReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_MOTHERS_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case GET_MOTHERS_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                mothers: payload
            };
        case GET_MOTHERS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        default:
            return state;
    }
};

export default mothersReducer;
