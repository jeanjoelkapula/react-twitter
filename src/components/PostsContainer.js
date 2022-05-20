import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import NoPostAvailable from "./NoPostAvailable";

export default function PostsContainer (props) {
    const posts = useSelector(state => state.posts)
    const postElements = posts.map(post => (
        <Post key={post}/>
    ));

    return (
        <div className="post-container disable-scrollbars">
            {
                posts.length > 0 ?
                postElements :
                <NoPostAvailable />
            }
        </div>
    )
}