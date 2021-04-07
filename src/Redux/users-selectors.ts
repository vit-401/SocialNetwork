export const getUserSelector = (state: any) => {
    return state.usersPage.users
}

export const getPageSize = (state: any) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount= (state: any) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage= (state: any) => {
    return state.usersPage.page
}
export const getIsFetching= (state: any) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress= (state: any) => {
    return state.usersPage.followingInProgress
}
export const s = 1