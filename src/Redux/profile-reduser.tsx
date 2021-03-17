// @ts-ignore
import {postsType} from "./state";

export const profileReduser = (state: any, action: any) => {
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