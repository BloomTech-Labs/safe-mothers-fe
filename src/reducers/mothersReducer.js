import {types} from "../actions/index";

const {
    GET_MOTHERS_START,
    GET_MOTHERS_SUCCESS,
    GET_MOTHERS_FAILURE,

    GET_MOTHER_START,
    GET_MOTHER_SUCCESS,
    GET_MOTHER_FAILURE,

    UPDATE_MOTHER_START,
    UPDATE_MOTHER_SUCCESS,
    UPDATE_MOTHER_FAILURE,

    GET_LABELS_START,
    GET_LABELS_SUCCESS,
    GET_LABELS_FAILURE,

    CREATE_LABEL_START,
    CREATE_LABEL_SUCCESS,
    CREATE_LABEL_FAILURE,

    DELETE_LABEL_START,
    DELETE_LABEL_SUCCESS,
    DELETE_LABEL_FAILURE,

    ADD_MOTHERS_START,
    ADD_MOTHERS_SUCCESS,
    ADD_MOTHERS_FAILURE,
} = types;

const initialState = {
    isLoading: false,
    error: null,
    isAuth: !!localStorage.getItem("token"),
    mothers: [],
    mother: null,
    labels: [],
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

        case GET_MOTHER_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case GET_MOTHER_SUCCESS:
            console.log("MOTHER REDUCER ", payload);
            return {
                ...state,
                error: null,
                isLoading: false,
                mother: payload
            };
        case GET_MOTHER_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        case UPDATE_MOTHER_START:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case UPDATE_MOTHER_SUCCESS:
            const filtered_mothers = state.mothers.map(mom => mom.id === payload.id ? payload : mom);
            return {
                ...state,
                error: null,
                isLoading: false,
                mothers: filtered_mothers,
            };
        case UPDATE_MOTHER_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false
            };

        case GET_LABELS_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case GET_LABELS_SUCCESS:
            return {
                ...state,
                error: "",
                labels: payload,
                isLoading: false,
            };
        case GET_LABELS_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        case CREATE_LABEL_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case CREATE_LABEL_SUCCESS:
            return {
                ...state,
                error: "",
                labels: [...state.labels, payload],
                isLoading: false,
            };
        case CREATE_LABEL_FAILURE:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };
        case DELETE_LABEL_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case DELETE_LABEL_SUCCESS:
            const filtered_labels = state.labels.filter(label => label.id !== payload);
            return {
                ...state,
                isLoading: false,
                labels: filtered_labels,
                error: "",
            };
        case DELETE_LABEL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case ADD_MOTHERS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case ADD_MOTHERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: "",
            };
        case ADD_MOTHERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };

        default:
            return state;
    }
};

export default mothersReducer;
