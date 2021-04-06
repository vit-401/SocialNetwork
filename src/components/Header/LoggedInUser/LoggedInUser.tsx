import React from "react";
import s from '../LoggedInUser/style.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../Redux/auth-reduser";

const LoggedInUse = (props: any) => {

    return <>
        <div className={s.wrap}>
            <div style={{color: "#ffffff"}}>name: {props.login}</div>
            <NavLink to={'/login'} onClick={props.logout} className={s.logout}>Logout</NavLink>
        </div>
    </>
}

export default connect(null,{logout})(LoggedInUse)