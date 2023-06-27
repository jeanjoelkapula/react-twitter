const initialState = null;
const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";

export function setCurrentChat(payload) {
    return {
        type: SET_CURRENT_CHAT,
        payload
    }
}

export default function currentChatReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_CHAT:
            return action.payload
        default:
            return state;
    }
}