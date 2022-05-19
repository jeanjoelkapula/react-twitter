import {redux, combineReducers, createStore} from "redux"
import userReducer from "./user"

const rootReducer = combineReducers({
    user: user
})

export default createStore(rootReducer)