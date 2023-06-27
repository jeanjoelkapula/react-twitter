import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
export default function MessageList(props) {

    const messageElements = props.messages.map(message => (
        <Message 
            key = {message.id}
            message = {message}
        />
    ))
    return (
        <div className="flex-grow-1 position-relative">
            <div id="message-list" className="chat-messages chat-scroll custom-scrollbar p-4 ps">
                {messageElements}
            </div>
        </div>
    )
}