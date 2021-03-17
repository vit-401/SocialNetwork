import React from "react";
import s from './style.module.scss'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addNewMessageCreator, updateNewMessageCreator} from "../../Redux/state";

type messagesType = {
    id: number
    message: string
}
type dialogsType = {
    id: number
    name: string
}
type dialogsPropsType = {
    dialogsPage: {
        messages: Array<messagesType>
        dialogs: Array<dialogsType>
        newMassageBody: string
    }
    dispatch: (x: any) => void
}

const Dialogs: React.FC<dialogsPropsType> = (props) => {
    const onChangeMessage = (e: any) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageCreator(body))
    }
    const sendNewMeassage = () => {
        props.dispatch(addNewMessageCreator())
        props.dispatch(updateNewMessageCreator(''))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)}
            </div>

            <div className={s.messages}>
                {props.dialogsPage.messages.map(item => <Message key={item.id} message={item.message}/>)}
            </div>
            <div>
                <textarea value={props.dialogsPage.newMassageBody} onChange={onChangeMessage}/>
            </div>
            <div>
                <button onClick={sendNewMeassage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs