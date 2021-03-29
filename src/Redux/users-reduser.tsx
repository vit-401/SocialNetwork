let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false
}
export const usersReducer = (state: any = initialState, action: any) => {
    let userFinded
    switch (action.type) {

        case 'FOLLOW':
            debugger
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
            return {...state, users: action.users.map((user: any) => ({...user}))}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.usersCount}
        case 'IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const seteUsersAC = (users: any) => ({type: 'SET-USERS', users})
export const seteCurrentAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const seteTotalUsersCountAC = (usersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', usersCount})
export const isFetchingAC = (isFetching: boolean) => ({type: 'IS-FETCHING', isFetching})
