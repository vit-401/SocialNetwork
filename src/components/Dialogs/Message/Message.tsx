import s from "../style.module.scss";
import React from "react";

type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {
    return <>
        <div className={s.message}>{props.message}</div>
    </>;
}