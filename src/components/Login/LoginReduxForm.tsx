import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {renderFieldInput} from "../../common/FormsControls/FormsControl";
import React from "react";
import s from './style.module.scss'

const maxLength30 = maxLength(30)

const LoginReduxForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor="login">Login</label>
            <Field validate={[required, maxLength30]} name="login" component={renderFieldInput} type="text"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field validate={[required, maxLength30]} name="password" component={renderFieldInput}
                   type="password"/>
        </div>
        <div>
            <Field name="remamber" component="input" type="checkbox"/>
            <label htmlFor="remamber">Remamber me</label>
        </div>
        {
            props.error && <div className={s.commonError}>{props.error}</div>
        }

        <div>
            <button type="submit">Login</button>
        </div>
    </form>;
}

export default reduxForm({
    form: 'login'
})(LoginReduxForm)