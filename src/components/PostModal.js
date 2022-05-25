import React from "react";
import PostForm from "./PostForm";
import { useSelector } from "react-redux";

export default function PostModal () {
    const post_modal_shown = useSelector(state => state.post_modal_shown);
    console.log(post_modal_shown)
    const style = {
        display: post_modal_shown ? "block" : "none"
    };

    return (
        <div id="twit-modal" className="modal post-modal" tabIndex="-1" role="dialog" style={style}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <PostForm />
                    </div>
                </div>
            </div>
        </div>
    );
}