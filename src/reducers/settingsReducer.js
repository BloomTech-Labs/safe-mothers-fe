import {types} from "../actions/index";

const {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
} = types;

const initialState = {
    isLoading: false,
    error: null,
    users: [],
};

const settingsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS_START:
            return{
                isLoading: true,
                error: "",
            };
        case GET_USERS_SUCCESS:
            return {
                isLoading: false,
                error: "",
                users: payload,
            };
        case GET_USERS_FAILURE:
            return {
                isLoading: false,
                error: payload,
            }
    }
};


export default settingsReducer;