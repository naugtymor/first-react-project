import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";

const Textarea = Element("textarea")
const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} validate={[required, maxLength30]}/>
            </div>
            <div>
                <button><h3>Send message</h3></button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'DialogAddMessageForm'})(AddMessageForm);
