import s from "./style.module.scss";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../../utils/validators/validators";
import {renderField} from "../../../common/FormsControls/FormsControl";

const maxLength50 = maxLength(50)
const AddPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
            <Field name="post"
                   component={renderField}
                   type="text"
                   validate={[maxLength50]}
                   textareClass={s.textarea}
            />


        <button className={s.btn} type="submit">Add</button>
    </form>;
}


export default reduxForm({
    form: 'sendPost'

})(AddPostForm)