import React from "react"
import { reduxForm, Field } from 'redux-form';
import {Link} from "react-router-dom";


let RegisterForm = props => {
    const { handleSubmit } = props

    return (
        <form className="auth-form validate-form" onSubmit={handleSubmit}>
            <span className="auth-form-logo">
                <i className="zmdi zmdi-landscape" style={{color: "black"}}></i>
            </span>

            <span className="auth-form-title p-b-34 p-t-27">
                Registration
            </span>

            <div className="wrap-input100 validate-input" data-validate="Enter username">
                <Field className="input100" type="text" component="input" name="username" placeholder="Username" />
                <span className="focus-input100" data-placeholder=""></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter email">
                <Field className="input100" type="email" component="input" name="email" placeholder="Email" />
                <span className="focus-input100" data-placeholder=""></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
                <Field className="input100" type="password" component="input" name="password" placeholder="Password" />
                <span className="focus-input100" data-placeholder=""></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
                <Field className="input100" type="password" component="input" name="confirmation" placeholder="Confirm Password" />
                <span className="focus-input100" data-placeholder=""></span>
            </div>

            <div className="container-auth-form-btn">
                <button className="auth-form-btn" type="submit">
                    Register
                </button>
            </div>

            <div className="text-center p-t-90">
                <Link className="txt1" to="/login">
                    Already have an account? Sign in
                </Link>
            </div>
        </form>

    )
}

RegisterForm = reduxForm({
    form: 'registerForm'
})(RegisterForm)

export default RegisterForm