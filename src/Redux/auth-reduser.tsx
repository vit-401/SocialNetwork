import {authMe} from "../API/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type AuthStateType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}


export const setUserDataAC = (userId: any, email: any, login: any, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login, isAuth}
    }
}


export const authMeThunkCreator = () => (dispatch: any) => {
    authMe.me().then(data => {
        let {id, email, login} = data.data
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authMe.login(email, password, rememberMe).then((res) => {
        if (res.resultCode === 0) {
            dispatch(authMeThunkCreator())
        } else {
            let message
            if (res.messages[0].length > 0) {
                message = res.messages[0]
            } else {
                message = 'Some think happen'
            }
            dispatch(stopSubmit('login', {_error: message}))
        }

    })
}

export const logout = () => (dispatch: Dispatch) => {
    authMe.logout().then((res) => {
        if (res.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    })
}
