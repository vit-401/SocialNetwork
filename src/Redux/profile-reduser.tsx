import {getProfile} from "../API/api";

let initialState = {
    posts: [
        {id: 1, post: 'Post 1', likesCount: '32'},
        {id: 2, post: 'Post 2', likesCount: '21'},
        {id: 3, post: 'Post 3', likesCount: '14'}
    ],
    newPostText: '',
    profile: null
}
export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case'ADD-POST':

            let newPost: any = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: '0'
            }
            return {...state, posts: [...state.posts, newPost]}
        case'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }

}

export const addPostACFunc = () => ({type: 'ADD-POST'})
export const setProfileACFunc = (profile: any) => ({type: 'SET-USER-PROFILE', profile})
export const updateNewPostTexttACFunc = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export const getProfileThunkCreator = (userId: number) => (dispatch: any) => {
    debugger
    if (!userId) {
        userId = 1000
    }
    getProfile(userId)
        .then(data => {
            dispatch(setProfileACFunc(data))
        })
}



