import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer as reduxFormReducer } from 'redux-form';
import userAuthReducer from "./userAuth"
import postsReducer from "./posts";
import chatsReducer from "./chats";
import currentChatReducer from "./currentChat";
import authReducer from "./authForm";

const rootReducer = combineReducers({
    auth: userAuthReducer,
    form: reduxFormReducer,
    authFormData: authReducer,
    posts: postsReducer,
    chats: chatsReducer,
    currentChat: currentChatReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));