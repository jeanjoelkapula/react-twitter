const initialState = [];

const SET_CHATS = "SET_CHATS";
const ADD_CHAT = "ADD_CHAT";
const SET_SELECTED = "SET_SELECTED";

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

export function setSelected(payload) {
    return {
        type: SET_SELECTED,
        payload
    }
}

export default function chatsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CHATS:
            return action.payload;
        case ADD_CHAT:
            return [
                action.payload,
                ...state
            ]
        case SET_SELECTED:
            return {
                ...state,
                isSelected:action.payload
            }
        default:
            return state
    }
}