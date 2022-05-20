import {combineReducers, createStore} from "redux"
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from "./user"
import postsReducer from "./posts";

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxFormReducer,
    posts: postsReducer
})

export default createStore(rootReducer)