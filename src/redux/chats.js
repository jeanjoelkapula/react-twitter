const initialState = [];

const SET_CHATS = "SET_CHATS";
const ADD_CHAT = "ADD_CHAT";

export function setChats(payload) {
    return {
        type: SET_CHATS,
        payload
    }
}

export function addChat(payload) {
    return {
        type: ADD_CHAT,
        payload
    }
}

export default function chatsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CHATS:
            return action.payload;
        case ADD_CHAT:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}