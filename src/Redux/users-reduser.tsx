let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Vitally',
            status: 'I am a boss',
            photo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            location: {city: 'Kiev', country: 'Ukrainian'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Bob',
            status: 'I am not a boss',
            photo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Alex',
            status: 'I am little boss',
            photo: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId})
export const seteUsersAC = (users: any) => ({type: 'SET-USERS', users})
