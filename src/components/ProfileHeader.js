import React from "react";

export default function ProfileHeader(props) {

    const divStyle = {
        display: "flex",
        marinLeft: "auto"
    }

    return (
        <div className="profile-top">
            <div className="profile-user">
                <i className="fas fa-user-circle"></i>
            </div>
            <div>
                <div className="profile-username">
                    <span>JayJay</span>
                </div>
                <div className="profile-joined-date">
                    <i className="fas fa-calendar-alt"></i><span> Joined Oct. 21, 2021, 2:14 p.m.</span>
                </div>
                <div className="profile-following">
                    <div>
                        <span id="followees">2</span><p><a href="/1/following/">Following</a></p>
                    </div>
                    <div>
                        <span id="followers">5</span><p><a href="/1/followers/">Followers</a></p>
                    </div>
                    <div style={divStyle}>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}