import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";
import { authReducer } from "./authReducer";


export const rootReducer = combineReducers({
    studentReducer , authReducer
})