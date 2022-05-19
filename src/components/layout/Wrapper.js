import React from "react"

export default function Wrapper (props) {
    return (
        <div className="wrapper">
            <div className="twitter-wrap">
                {props.children}
            </div>
        </div>
    )
}