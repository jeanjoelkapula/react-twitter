const initialState = {
    username: '',
    is_authenticated: true
}

export default function userReducer (state = initialState, action) {
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