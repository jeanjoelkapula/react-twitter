import {combineReducers, createStore} from "redux"
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from "./user"

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxFormReducer
})

export default createStore(rootReducer)