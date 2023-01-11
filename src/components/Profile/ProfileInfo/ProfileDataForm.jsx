import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Element} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';


export const Input = Element("input")
const Textarea = Element("textarea")
const maxLength30 = maxLengthCreator(30)

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
                {error && <div>
                <span className={s.formSummeryError}>
                    {error}
                </span>
                </div>
                }
            </div>
            <h2> Full name:
                <Field component={Input} name={'fullName'} placeholder={'Full Name'} validate={[]}/>
            </h2>
            <div>Searching for a job:
                <Field component={Input} name={'lookingForAJob'} validate={[]} type={"checkbox"}/>
            </div>
            <div>About me:
                <Field component={Input} name={'aboutMe'} placeholder={'About Me'} validate={[]}/>
            </div>
            <div>
                My professional skills:
                <Field component={Textarea} name={'lookingForAJobDescription'} placeholder={'Enter your skills'} validate={[required, maxLength30]}/>
            </div>
            <div>Contacts {Object.keys(profile.contacts).map((key,index) => {
                return (
                    <div className={s.contact} key={index}>
                        <div>
                            {key}:
                            <Field component={Input} name={'contacts.' + key} validate={[]} placeholder={key}/>
                        </div>
                    </div>
                )
            })}</div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);