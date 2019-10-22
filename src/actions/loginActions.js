import {axiosInstance} from "../utils/axiosWithAuth"

export const IS_LOGGING_IN="IS_LOGGING_IN"
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_ERROR="LOGIN_ERROR"
export const IS_LOGGING_OUT="IS_LOGGING_IN"
export const LOGOUT_SUCCESS="LOGIN_SUCCESS"
export const LOGOUT_ERROR="LOGIN_ERROR"

export const IS_SIGNING_UP="IS_SIGNING_UP"
export const SIGNUP_SUCCESS="SIGNUP_SUCCESS"
export const SIGNUP_ERROR="SIGNUP_ERROR"


export const attemptLogin = (creds) => dispatch => {
    dispatch({type: IS_LOGGING_IN})
    return axiosInstance().post("/user/login", creds)
        .then(res=> {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("username", creds.username)
            localStorage.setItem("isAdmin", res.data.isAdmin)
            dispatch({type: LOGIN_SUCCESS})
            return true
        })
        .catch(err => {
            let error = err.request.response.substring(err.request.response.indexOf(':')+2, err.request.response.length-2)
            dispatch({type: LOGIN_ERROR, payload: error}) 
        })
}

export const attemptSignUp = (creds, isAdmin) => dispatch => {
    let neededCreds = {}
    if(!isAdmin){
        neededCreds = {
            username: creds.username,
            password: creds.password,
            
        }
    }
    else{
        neededCreds = {
            username: creds.username,
            password: creds.password,
            isAdmin: isAdmin,
        }
    }
    dispatch({type: IS_SIGNING_UP})
    return axiosInstance().post("/user/register", neededCreds) 
        .then(res => {
            dispatch({type: SIGNUP_SUCCESS})
        })
        .catch(err => {
            dispatch({type: SIGNUP_ERROR, payload: err}) 
        })
}

export const logout = () => dispatch => {
    dispatch({type: IS_LOGGING_OUT})
    axiosInstance().get("/user/logout")
        .then(res=> {
            dispatch({type: LOGOUT_SUCCESS})
        })
        .catch(err => {
            dispatch({type: LOGOUT_ERROR, payload: err}) 
        })

}