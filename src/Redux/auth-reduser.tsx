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
