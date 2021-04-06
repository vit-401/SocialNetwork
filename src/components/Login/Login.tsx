import React from 'react'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {login} from "../../Redux/auth-reduser";
import LoginReduxForm from "./LoginReduxForm";


let Login = (props: any) => {
    const onSubmit = (value: any) => {
        props.login(value.login, value.password, value.remamber)
    }
    if (props.isAuth) {
        debugger
        return <Redirect to={`/profile/${props.userId}`}/>
    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}
export default connect(mapStateToProps, {login})(Login)