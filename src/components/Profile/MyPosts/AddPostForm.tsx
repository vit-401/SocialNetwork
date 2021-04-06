import s from "./style.module.scss";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name="post" className={s.textarea} component="textarea" type="text"/>

        <button className={s.btn} type="submit">Add</button>
    </form>;
}


export default reduxForm({
    form: 'sendPost'
})(AddPostForm)