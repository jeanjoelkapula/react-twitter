import React from "react";

export default function Chat(props) {
    
    return (
        <a className="list-group-item list-group-item-action ">
            <i className="fas fa-user-circle"></i>
            <div className="media-body ml-3">
                superuser
            </div>
            <div className="badge chat-badge  d-none ">0</div>
        </a>
    )
}