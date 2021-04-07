import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type UsersStateType = {
    users: Array<any>,
    pageSize: number,
    totalUsersCount: number,
    page: number,
    isFetching: boolean,
    followingInProgress: Array<any>
}

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state: UsersStateType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, page: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: any) => id != action.userId)
            }
        }
        default:
            return state;
    }
}
export const followSuccess = (userId: number) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: any) => ({type: SET_USERS, users})
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const getUsers = (page: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsersAPI(page, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setUsers(data.items))
        })

}


export const unfollow = (id: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.unFollowToUser(id)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingProgress(false, id))

        })
}
export const follow = (id: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.followToUser(id)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingProgress(false, id))

        })
}

export default usersReducer;