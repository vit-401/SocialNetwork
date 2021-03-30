import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
    }).then(res => res.data)
}
export const getProfile = (userId = 1000) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(res => res.data)
}
export const unFollowToUser = (userId: number) => {
    return instance.delete(`follow/${userId}`)
        .then(res => res.data)
}
export const followToUser = (userId: number) => {
    debugger
    return instance.post(`follow/${userId}`)
        .then(res => res.data)
}
export const authMe = () => {
    return instance.get(`auth/me`)
        .then(res => res.data)
}