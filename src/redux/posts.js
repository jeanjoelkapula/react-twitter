const initialState = [];
const ADD_POSTS = "ADD_POSTS";
const CLEAR_POSTS = "CLEAR_POSTS";

export function addPosts(payload) {
    return {
        type: ADD_POSTS,
        payload
    }
}

export function clearPosts() {
    return {
        type: CLEAR_POSTS,
    }
}
export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_POSTS:
            return [
                ...state,
                ...action.payload
            ];
        case CLEAR_POSTS:
            return [];
        default:
            return state;
    }
}