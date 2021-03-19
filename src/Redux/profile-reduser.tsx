import {postsType} from "./state";

let initialState = {
    posts: [
        {id: 1, post: 'Post 1', likesCount: '32'},
        {id: 2, post: 'Post 2', likesCount: '21'},
        {id: 3, post: 'Post 3', likesCount: '14'}
    ],
    newPostText: ''
}
export const profileReduser = (state: any = initialState, action: any) => {
    switch (action.type) {
        case'ADD-POST':

            let newPost: postsType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: '0'
            }
            state.posts.push(newPost)
            return state
        case'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}
