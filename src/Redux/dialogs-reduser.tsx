type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}

export type DialogStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMassageBody: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Vitally"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Bob"}
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "how are you?"},
        {id: 3, message: "Let go to school!!! =)"}
    ],
    newMassageBody: ''
}
export const dialogsReducer = (state: DialogStateType = initialState, action: any) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE-BODY':
            let newMessageBody: any = {
                id: new Date().getTime(),
                message: state.newMassageBody
            }
            return {...state, messages: [...state.messages, newMessageBody]}
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMassageBody = action.newMessage
            return {...state, newMassageBody: action.newMessage}
        default:
            return state
    }
}

export const addNewMessageCreator = () => ({type: 'ADD-NEW-MESSAGE-BODY'} as const)
export const updateNewMessageCreator = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: body} as const)
