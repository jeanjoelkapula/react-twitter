import React from "react"

export default function Wrapper (props) {
    return (
        <div class="wrapper">
            <div class="twitter-wrap">
                {props.children}
            </div>
        </div>
    )
}