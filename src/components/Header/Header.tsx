import React from "react";
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return <header className='header'>
        <img src="" alt=""/>
        <div>
            {
                props.isAuth
                    ? <div style={{color: '#ffffff'}}>name: {props.login}</div>
                    : <NavLink activeStyle={{color: '#efefef'}}
                               style={{color: '#fff', float: "right"}}
                               to={'/login'}>Log In</NavLink>
            }

        </div>
    </header>;
}