import React, {useEffect} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

let Login = (props: InjectedFormProps) => {


    return (
        <>
            <div>LoginPage</div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password"/>
                </div>
                <div>
                    <Field name="remamber" component="input" type="checkbox"/>
                    <label htmlFor="remamber">Remamber me</label>
                </div>
                <div>
                    <button type="submit" >Login</button>
                </div>
            </form>
        </>
    )
}

const LoginContainer = reduxForm({
    form: 'login'
})(Login)
export default LoginContainer