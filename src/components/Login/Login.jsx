import React from "react";
import {LoginReduxForm} from "./LoginReduxForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect(null, {login})(Login);