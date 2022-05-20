import {combineReducers, createStore} from "redux"
import { reducer as reduxFormReducer } from 'redux-form';
import userReducer from "./user"
import postsReducer from "./posts";
import chatsReducer from "./chats";
import currentChatReducer from "./currentChat";

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxFormReducer,
    posts: postsReducer,
    chats: chatsReducer,
    currentChat: currentChatReducer
})

export default createStore(rootReducer)