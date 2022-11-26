import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validator";
import React from "react";
import {Element} from "../../../common/FormsControls/FormsControls";

const Textarea = Element("textarea")
const maxLength30 = maxLengthCreator(30)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter your text'} validate={[required, maxLength30]}/>
            </div>
            <div>
                <button><h3>Add post</h3></button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'ProfileAddPostForm'})(AddPostForm);

export default AddMessageReduxForm;