import React from "react";
import {addNewMessageCreator, stateType, updateNewMessageCreator} from "../../Redux/state";
import {StoreContext} from "../../StoreContext";
import Dialogs from "./Dialogs";
import {store} from "../../Redux/redux-srore";

type messagesType = {
    id: number
    message: string
}
type dialogsType = {
    id: number
    name: string
}
type dialogsPropsType = {}

export const DialogsContainer: React.FC<dialogsPropsType> = (props) => {


    return <StoreContext.Consumer>
        {(store: any) => {
            let state = store.getState().dialogsPage
            const updateNewMessage = (text: string) => {
                store.dispatch(updateNewMessageCreator(text))
            }
            const sendNewMeassage = () => {
                store.dispatch(addNewMessageCreator())
            }
            return <Dialogs dialogsPage={state}
                              addNewMessage={sendNewMeassage}
                              updateNewMessage={updateNewMessage}/>
        }
        }
    </StoreContext.Consumer>
}
