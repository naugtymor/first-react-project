import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import React from "react";
import {Element} from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css"

const Input = Element("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={Input} name={'email'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={"password"} component={Input} name={'password'} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={'rememberMe'}/> remember me
            </div>

            {props.error && <div>
                <span className={s.formSummeryError}>
                    {props.error}
                </span>
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
