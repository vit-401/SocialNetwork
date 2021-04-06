import React from "react";
import {Field, reduxForm} from 'redux-form'

const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>

        <Field name="message" component="textarea" type="text" />
        <div>
            <button  type="submit">Send</button>
        </div>
    </form>;
}

export default reduxForm({
    form: 'sendPost'
})(AddMessageForm)