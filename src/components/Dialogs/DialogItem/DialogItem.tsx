import s from "../style.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: number
    name: string
}
export const DialogItem:React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogsItems}>
            <ul>
                <li><NavLink activeClassName={s.active} to={path}>{props.name}</NavLink></li>
            </ul>
        </div>
    )
}