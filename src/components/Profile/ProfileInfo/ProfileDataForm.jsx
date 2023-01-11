import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Element} from "../../common/FormsControls/FormsControls";

export const Input = Element("input")
const Textarea = Element("textarea")
const maxLength30 = maxLengthCreator(30)

const ProfileDataForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <h2> Full name:
                <Field component={Input} name={'fullName'} placeholder={'Full Name'} validate={[]}/>
            </h2>
            <div>Searching for a job:
                <Field component={Input} name={'searchingForAJob'} validate={[]} type={"checkbox"}/>
            </div>
            <div>About me:
                <Field component={Input} name={'aboutMe'} placeholder={'About Me'} validate={[]}/>
            </div>
            <div>
                My professional skills:
                <Field component={Textarea} name={'lookingForAJobDescription'} placeholder={'Enter your skills'} validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>save</button>
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);