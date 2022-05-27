import React from "react";

export default function Post(props) {
    
    const {user, date_created, post, is_liked} = props.post;

    return (
        <div className="post">
            <div className="post-user">
                <a href="/profile/4/"><i className="fas fa-user-circle"></i></a>
            </div>
            <div className="post-content">
                <div className="post-username">
                    <a href="/profile/4/">{user.username}</a>
                    <span>{date_created}</span>
                </div>
                <div className="post-text">
                    <p id="post-content-20">{post}</p>
                </div>
                <div className="post-buttons">
                    <div className="post-button">
                        <a id="like-20" data-post="20"><i className={`far fa-heart ${is_liked ? "post-like-active": ""}`}></i></a>
                        <span id="likes-20"></span>
                    </div>
                    <div className="post-button">
                        <a id="dislike-20" data-post="20"><i className={`fas fa-heart-broken ${is_liked ? "" : "post-like-active"}`}></i></a>
                        <span id="dislikes-20"></span>
                    </div>
                </div>
            </div>			
        </div>
    )
}