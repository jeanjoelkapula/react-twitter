import React from "react";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
export default function MessageList(props) {

    const messageEndRef = useRef(null);
    const messageElements = props.messages.map(message => (
        <Message 
            key = {message.id}
            message = {message}
        />
    ))

    useEffect(() => {
            messageEndRef.current?.scrollIntoView({ behavior: 'smooth' , block: 'end'});
    });

    return (
        <div className="flex-grow-1 position-relative">
            <div id="message-list" className="chat-messages chat-scroll custom-scrollbar p-4 ps">
                {messageElements}
                <div ref={messageEndRef}/>
            </div>
        </div>
    )
}