
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
export const dialogsReduser = (state: any = initialState, action: any) => {
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
