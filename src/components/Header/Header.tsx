import React from "react";
import {NavLink} from "react-router-dom";
import LoggedInUse from "./LoggedInUser/LoggedInUser";

export const Header = (props: any) => {
    return <header className='header'>
        <img src="" alt=""/>
        <div>
            {
                props.isAuth
                    ? <LoggedInUse login={props.login}/>
                    : <NavLink activeStyle={{color: '#efefef'}}
                               style={{color: '#fff', float: "right"}}
                               to={'/login'}>Log In</NavLink>
            }

        </div>
    </header>;
}