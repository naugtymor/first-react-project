import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import React from "react";
import {Element} from "../common/FormsControls/FormsControls";
import sF from "../common/FormsControls/FormsControls.module.css"
import s from "./Login.module.scss"

const Input = Element("input");

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.loginBody}>
            <p className={s.loginDescription}></p>
            <p className={}></p>
            <p className={}></p>
            <p className={}></p>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Login'} component={Input} name={'email'} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} type={"password"} component={Input} name={'password'} validate={[required]}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={'rememberMe'}/> remember me
                </div>
                {captchaUrl &&
                    <img className={sF.captchaImg} src={captchaUrl}/>
                }
                {captchaUrl &&
                    <Field placeholder={'Captcha'} component={Input} name={'captcha'} validate={[required]}/>
                }
                {error && <div>
                <span className={sF.formSummeryError}>
                    {error}
                </span>
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
