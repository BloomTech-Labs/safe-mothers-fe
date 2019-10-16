import { types } from "../actions/index";

const initialState = {
    token: '',
    user: [],
    isAuth: false,
    isLoading: false,
    isSuccess: false,
    errors: null,
}

const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOGIN_START:
            return {
                ...state,
                isLoading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                isAuth: true,
                isLoading: false,
                isSuccess: true,
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        default:
            return state;
    }
}

export default loginReducer;