const initialState = {
    id: 1,
    user: "Superuser",
    messages: [
        {
            id: 1,
            message: "Hey wassup jay",
            incoming: true,
            time: "7:28 pm"
        },
        {
            id: 2,
            message: "Hey wassup super",
            incoming: false,
            time: "7:28 pm"
        },
        {
            id: 3,
            message: "You good?",
            incoming: true,
            time: "7:28 pm"
        },
        {
            id: 4,
            message: "Yeah you?",
            incoming: false,
            time: "7:28 pm"
        }
    ]
}

export default function currentChatReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}