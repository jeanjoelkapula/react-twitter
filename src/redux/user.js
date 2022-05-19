const initialState = {
    username: ''
}

export default function userReducer (state = null, action) {
    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}