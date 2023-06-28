import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Chat(props) {
    const username = useSelector(state => state.auth.user.username); 
    const chat = props.chat;
    const participants = props.chat.participants.map(participant => {
        if (participant !== username) {
            return <span key={participant}>{participant}</span>
        }
    })
    return (
        <Link className={`list-group-item list-group-item-action ${props.isSelected && "active"}`} to={`/messages/${username}`}>
            <i className="fas fa-user-circle"></i>
            <div className="media-body ml-3">
                {participants}
            </div>
            <div className="badge chat-badge  d-none ">0</div>
        </Link>
    )
}