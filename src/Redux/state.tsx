// import {rerenderEntireTree} from "../index";


export type messagesType = {
    id: number
    message: string
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}
export type dialogsType = {
    id: number
    name: string
}
export type postsType = {
    id: number
    post: string
    likesCount: string
}
export type stateType = {
    state: {
        profilePage: profilePageType
        dialogsPage: {
            dialogs: Array<dialogsType>
            messages: Array<messagesType>,
            newMassageBody: string
        }
    }
    subscribe: (x: any) => void
    onChange: (x: any) => void
    getState: () => any
    dispatch: (action: ActinTypes) => void
}

export type ActinTypes =
    ReturnType<typeof addPostACFunc>
    | ReturnType<typeof updateNewPostTexttACFunc>
    | ReturnType<typeof addNewMessageCreator>
    | ReturnType<typeof updateNewMessageCreator>


export let store: stateType = {
    state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Post 1', likesCount: '32'},
                {id: 2, post: 'Post 2', likesCount: '21'},
                {id: 3, post: 'Post 3', likesCount: '14'}
            ],
            newPostText: ''

        },
        dialogsPage: {
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
    },
    onChange() {
        console.log('test')
    },
    subscribe(callback) {
        this.onChange = callback
    },

    getState() {
        return this.state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: postsType = {
                id: new Date().getTime(),
                post: this.state.profilePage.newPostText,
                likesCount: '0'
            }
            this.state.profilePage.posts.push(newPost)
            this.onChange(this.state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.state.profilePage.newPostText = action.newText
            this.onChange(this.state)
        } else if (action.type === 'ADD-NEW-MESSAGE-BODY') {
            let newMessageBody: any = {
                id: new Date().getTime(),
                message: this.state.dialogsPage.newMassageBody
            }
            this.state.dialogsPage.messages.push(newMessageBody)
            this.onChange(this.state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this.state.dialogsPage.newMassageBody = action.newMessage
            this.onChange(this.state)
        }
    }
}
export const addPostACFunc = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTexttACFunc = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const addNewMessageCreator = () => ({type: 'ADD-NEW-MESSAGE-BODY'} as const)
export const updateNewMessageCreator = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: body} as const)