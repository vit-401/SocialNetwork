import {postsType} from "./state";

export const dialogsReduser = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE-BODY':
            let newMessageBody: any = {
                id: new Date().getTime(),
                message: state.newMassageBody
            }
            state.messages.push(newMessageBody)
            return state
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMassageBody = action.newMessage
            return state
        default:
            return state
    }


}