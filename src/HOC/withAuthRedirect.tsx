import {Redirect} from "react-router-dom";
import React from "react";
import {AppStateType} from "../Redux/redux-srore";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: any): any => {
     function RedirectComponent(props: any): any {
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}


