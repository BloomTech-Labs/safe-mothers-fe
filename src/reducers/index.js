import {combineReducers} from "redux";

import authReducer from "./authReducer";
import mothersReducer from "./mothersReducer";
import driversReducer from "./driversReducer";
import settingsReducer from './settingsReducer';

export default combineReducers({
    authReducer,
    mothersReducer,
    driversReducer,
    settingsReducer
});