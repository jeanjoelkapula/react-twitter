import { setAxiosAuthToken } from "../helpers/axios";

const initialState = {
    user: null,
    token: "",
}

const SET_TOKEN = "SET_TOKEN";
const SET_USER = "SET_USER";
const RESET = "RESET";

export function setAuthToken(payload) {
    return (dispatch) => {
        setAxiosAuthToken(payload);
        localStorage.setItem("token", payload);

        dispatch({
            type: SET_TOKEN,
            payload: payload
        });
    }
}

export function setCurrentUser(payload) {
    return (dispatch) => {
        localStorage.setItem("user", JSON.stringify(payload));

        dispatch({
            type: SET_USER,
            payload: payload
        });
    }
}

export function resetAuth() {
    return (dispatch) => {
        setAxiosAuthToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        
        dispatch({
            type: RESET
        });
    }
}


export default function userAuthReducer (state = initialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case RESET:
            return initialState
        default:
            return state
    }
}