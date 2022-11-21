import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {Element} from "../common/FormsControls/FormsControls";

const Input = Element("input")

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} component={Input} name={'login'} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;