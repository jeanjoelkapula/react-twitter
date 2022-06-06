import React from "react";
import { useSelector } from "react-redux";

export default function ProfileHeader(props) {

    const divStyle = {
        display: "flex",
        marginLeft: "auto"
    };

    const followButtonStyle = {
        marginRight: "0px"
    };

    const profile = useSelector(state => state.profile); 
    const user = useSelector(state => state.auth.user);
    const {username, date_joined, followers, followees} = props.user;
    const is_following = profile.followers.includes(user.username);

    return (
        <div className="profile-top">
            <div className="profile-user">
                <i className="fas fa-user-circle"></i>
            </div>
            <div>
                <div className="profile-username">
                    <span>{username}</span>
                </div>
                <div className="profile-joined-date">
                    <i className="fas fa-calendar-alt"></i><span> Joined {date_joined}</span>
                </div>
                <div className="profile-following">
                    <div>
                        <span id="followees">{followees.length}</span><p><a href="/1/following/">Following</a></p>
                    </div>
                    <div>
                        <span id="followers">{followers.length}</span><p><a href="/1/followers/">Followers</a></p>
                    </div>
                    <div style={divStyle}>                    
                        <div>
                            <a href="/messages?chat='new'&amp;s=1&amp;r=2" class="profile-message-button">
                                <i class="far fa-envelope"></i>
                            </a>
                        </div>
                        {
                            is_following ?
                                <div className="unfollow-button">
                                    <button data-id="2"><span style={followButtonStyle}>Following</span></button>
                                </div>
                            :
                            <div className="follow-button">
                                <button data-id="2"><span style={followButtonStyle}>Follow</span></button>
                            </div>
                        }
              
                    </div>
                </div>
            </div>
        </div>
    )
}