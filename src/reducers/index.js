import {combineReducers} from "redux";

import authReducer from "./authReducer";
import mothersReducer from "./mothersReducer"
import driversReducer from "./driversReducer"

export default combineReducers({
    authReducer,
    mothersReducer,
    driversReducer,
});