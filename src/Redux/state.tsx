import {rerenderEntireTree} from "../render";

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
    profilePage: profilePageType
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type addPostType = () => any
export type updataNewTextType = (m: string) => any


export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'Post 1', likesCount: '32'},
            {id: 2, post: 'Post 2', likesCount: '21'},
            {id: 3, post: 'Post 3', likesCount: '14'}
        ],
        newPostText: ''

    },

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
export const addPost: addPostType = () => {
    let newPost: postsType = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export const updateNewPostText: updataNewTextType = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}