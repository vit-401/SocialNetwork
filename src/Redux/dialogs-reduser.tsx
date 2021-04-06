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
}
export const dialogsReducer = (state: DialogStateType = initialState, action: any) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE-BODY':
            let newMessageBody: any = {
                id: new Date().getTime(),
                message: action.newMassageBody
            }
            return {...state,
                messages: [...state.messages, newMessageBody]}

        default:
            return state
    }
}

export const addNewMessageCreator = (newMassageBody: string) => ({type: 'ADD-NEW-MESSAGE-BODY', newMassageBody} as const)
