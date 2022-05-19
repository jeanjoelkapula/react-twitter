import React from "react"
import { reduxForm, Field } from 'redux-form';


let LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form>
            <div className="form-group">
                <Field autofocus className="form-control" component="input" type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
                <Field className="form-control" component="input" type="password" name="password" placeholder="Password" />
            </div>
            <button className="btn btn-primary" type="button" value="Login">Login</button>
            Don't have an account? <a>Register here.</a>
        </form>

    )
}

LoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm)