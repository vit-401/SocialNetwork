export type messagesType = {
    id: number
    message: string
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
    posts: Array<postsType>
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}


export let state: stateType = {
    posts: [
        {id: 1, post: 'Post 1', likesCount: '32'},
        {id: 2, post: 'Post 2', likesCount: '21'},
        {id: 3, post: 'Post 3', likesCount: '14'}
    ],

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
    ]
}