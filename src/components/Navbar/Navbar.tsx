import React from "react";
import s from './style.module.scss'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav className='nav'>
        <ul>
            <li><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/users">Users</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/dialogs">Message</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
        </ul>
    </nav>;
}