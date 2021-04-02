import {profileAPI, usersAPI} from "../API/api";

type PostsType = {
    id: number,
    post: string
    likesCount: string
}
export type  ProfileStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile:any
    status: string
}

let initialState = {
    posts: [
        {id: 1, post: 'Post 1', likesCount: '32'},
        {id: 2, post: 'Post 2', likesCount: '21'},
        {id: 3, post: 'Post 3', likesCount: '14'}
    ],
    newPostText: '',
    profile: null,
    status: ''
}
export const profileReducer = (state: ProfileStateType = initialState, action: any) => {
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
        case'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }

}

export const addPostACFunc = () => ({type: 'ADD-POST'})
export const setProfileACFunc = (profile: any) => ({type: 'SET-USER-PROFILE', profile})
export const updateNewPostTexttACFunc = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
export const setStatusACFunc = (status: string) => ({type: 'SET-STATUS', status})


export const getStatusTC = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            debugger
            dispatch(setStatusACFunc(res.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0){
                dispatch(setStatusACFunc(status))
            }
        })
}

export const getProfileThunkCreator = (userId: number) => (dispatch: any) => {
    if (!userId) {
        userId = 1000
    }
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfileACFunc(data))
        })
}



