import {authMe} from "../API/api";

export type AuthStateType = {
    users: any,
    email: any,
    login: any,
    isAuth: boolean
}

let initialState = {
    users: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}


export const setUserDataAC = (userId: any, email: any, login: any) => ({
    type: 'SET-USER-DATA',
    data: {userId, email, login}
})


export const authMeThunkCreator = () => (dispatch: any) => {
    authMe().then(data => {
        let {id, email, login} = data.data
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(id, email, login))
        }
    })
}
