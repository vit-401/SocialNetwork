let initialState = {
    users: []
}
export const usersReducer = (state: any = initialState, action: any) => {
    let userFinded
    switch (action.type) {
        case 'FOLLOW':
            userFinded = state.users.map((i: { id: any, followed: boolean }) => {
                if (i.id === action.userId) {
                    return {...i, followed: true}
                }
                return i
            })
            return {...state, users: [...userFinded]}
        case 'UNFOLLOW':

            userFinded = state.users.map((i: { id: any, followed: boolean }) => {
                if (i.id === action.userId) {
                    return {...i, followed: false}
                }
                return i
            })
            return {...state, users: [...userFinded]}
        case 'SET-USERS':
            debugger
            return {...state, users: action.users.map((user: any) => ({...user}))}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const seteUsersAC = (users: any) => ({type: 'SET-USERS', users})
