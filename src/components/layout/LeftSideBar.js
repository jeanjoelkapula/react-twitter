import React from "react"

export default function LeftSideBar(props) {
    return (
        <div className="twitter-wrap">
            <div className="side-left">
                <ul className="menu">
                    <li className="menu-item">
                        <a className="menu-link">
                            <i className="zmdi zmdi-landscape"></i>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a className="menu-link">
                            <i className="fas fa-home"></i>
                        </a>
                        <a className="menu-link-text">
                            <div>
                                <span>All Posts</span>
                            </div>    
                        </a>
                    </li>

                    <li className="menu-item">
                        <a className="menu-link">
                            <i className="fas fa-people-arrows"></i>
                        </a>
                        <a className="menu-link-text">
                            <div >
                                <span>Following</span>
                            </div>    
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-link">
                            <i className="far fa-envelope"></i>
                            <span className="badge chat-badge m-badge menu-icon-badge" id="messages-badge-">4</span> 
                        </a>
                        <a className="menu-link-text">
                            <div >
                                <span>Messages</span>
                            </div>   
                            <div className="badge chat-badge m-badge" id="messages-badge-" style={{marginLeft: "5px"}}>4</div> 
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-link" href="{% url 'profile' user.id %}">
                            <i className="fas fa-user-circle"></i>
                        </a>
                        <a className="menu-link-text">
                            <div >
                                <span>Profile</span>
                            </div>    
                        </a>
                    </li>
                    
                    <li className="menu-item">
                        <a className="menu-link">
                            <i className="fas fa-arrow-circle-left"></i>
                        </a>
                        <a className="menu-link-text">
                            <div >
                                <span>Log out</span>
                            </div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a className="menu-link add-twit" data-toggle="modal" data-target="#twit-modal">
                            <i className="fas fa-feather-alt"></i>
                        </a>
                    </li>
                    <li className="menu-item ">
                        <button id="menu-twit-button" className="add-twit-button" data-toggle="modal" data-target="#twit-modal">
                            New Post
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}