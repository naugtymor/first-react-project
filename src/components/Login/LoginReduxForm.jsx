import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import React from "react";
import {Element} from "../common/FormsControls/FormsControls";
import s from "./Login.module.scss"

const Input = Element("input");

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.loginBody}>
            <p className={s.loginDescription}>To log in get registered <a href={"https://social-network.samuraijs.com/"} className={s.link}>here</a></p>
            <p className={s.loginDescription}>or use common test account credentials:</p>
            <p className={s.loginDescription}>Email: free@samuraijs.com</p>
            <p className={s.loginDescription}>Password: free</p>
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
                    <img className={s.captchaImg} src={captchaUrl}/>
                }
                {captchaUrl &&
                    <Field placeholder={'Captcha'} component={Input} name={'captcha'} validate={[required]}/>
                }
                {error && <div>
                <span className={s.formSummeryError}>
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
