import React from 'react'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {login} from "../../Redux/auth-reduser";
import LoginReduxForm from "./LoginReduxForm";


let Login = (props: any) => {
    const onSubmit = (value: any) => {
        console.log(value.login, value.password, value.remamber)
        props.login(value.login, value.password, value.remamber)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile/:userId'}/>
    }
    return (
        <>
            <div>LoginPage</div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)