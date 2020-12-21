import {combineReducers} from "redux"

import userReducer from "./User/userReducer"
import doctorReducer from "./Doctor/doctorReducer"
export default combineReducers({
    user:userReducer,
    doctor:doctorReducer
})