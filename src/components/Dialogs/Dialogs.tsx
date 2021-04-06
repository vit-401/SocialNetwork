import React from "react";
import s from './style.module.scss'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm";
import {FormSubmitHandler} from "redux-form";


export type messagesType = {
    id: number
    message: string
}
export type dialogsType = {
    id: number
    name: string
}
export type dialogsPropsType = {
    dialogsPage: {
        messages: Array<messagesType>
        dialogs: Array<dialogsType>
        newMassageBody: string
    }
    addNewMessage: any
    updateNewMessage: any
    isAuth: boolean
}

const Dialogs: React.FC<dialogsPropsType> = (props) => {

    const sendNewMeassage = (value: string) => {
        props.addNewMessage(value)
    }
    const submit: any = (values: any) => {
        console.log(values.message)
        sendNewMeassage(values.message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)}
            </div>

            <div className={s.messages}>
                {props.dialogsPage.messages.map(item => <Message key={item.id} message={item.message}/>)}
            </div>
            <AddMessageForm onSubmit={submit}/>

        </div>
    )
}
export default Dialogs