import React from "react"
import { reduxForm, Field } from 'redux-form';

let HomePostForm = props => {

    const { handleSubmit } = props

    const buttonDivStyle = {
        display: "flex",
        justifyContent: "right",
        borderBottom: "1px solid #ffffff38"
    }
    const buttonStyle = {
        width: "100px",
        height: "40px",
        marginTop: "15px",
        marginBottom: "20px",
        marginRight: "6px"
    }

    const iconDivStyle = {
        width: "auto",
        paddingLeft: "10px",
        paddingRight: "10px"
    }

    return (
        <div className="">
            <form action="/" method="POST">
                <div className="write-twit">
                    <div className="post-user" style={iconDivStyle}>
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <Field name="post" id="post" cols="30" rows="3" type="text" component="textarea" placeholder="what's happening?" />
                </div>
                <div style={buttonDivStyle}>
                    <button type="submit" className="add-twit-button" style={buttonStyle}>
                        New Post
                    </button>
                </div>
            </form>
        </div>

    )
}

HomePostForm = reduxForm({
    form: 'homePostForm'
})(HomePostForm)

export default HomePostForm