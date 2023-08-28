import { combineReducers } from "redux"
import userReducer from "../Redux-saga/userReducer"
import dataReducer from "../Redux-saga-two/DataReducer"

const rootReducers = combineReducers({
    users: userReducer,
    datas: dataReducer 
})

export default rootReducers;

