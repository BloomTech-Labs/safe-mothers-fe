import {IS_LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR, IS_SIGNING_UP, SIGNUP_SUCCESS, SIGNUP_ERROR, IS_LOGGING_OUT, LOGOUT_SUCCESS, LOGOUT_ERROR} from '../actions'

const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isLoggedIn: false,
    isLoggedOut: false,
    isSigningUp: false,
    isSignedUp: false,
    errorMessage: null
}

export default (state=initialState, {type, payload}) => {
    switch(type){
        case IS_LOGGING_IN:
            return {
                ...state,
                isLoggingIn: true,
                errorMessage: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggingIn: false,
                errorMessage: payload
            }
        case IS_SIGNING_UP:
            return {
                ...state,
                isSigningUp: true,
                errorMessage: null
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: true
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        case IS_LOGGING_OUT:
            return {
                ...state,
                isLoggingOut: true,
                errorMessage: null
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedOut: true
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                isLoggingOut: false,
                errorMessage: payload
            }
        default:
            return state
    }
}