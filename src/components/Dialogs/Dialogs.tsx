import React from "react";
import s from './style.module.scss'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type messagesType = {
    id: number
    message: string
}
type dialogsType = {
    id: number
    name: string
}
type dialogsPropsType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}

const Dialogs: React.FC<dialogsPropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogs.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)
                }
            </div>

            <div className={s.messages}>
                {
                    props.messages.map(item => <Message key={item.id} message={item.message}/>)
                }
            </div>
        </div>
    )
}
export default Dialogs