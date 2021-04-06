import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
    getUsersAPI: (currentPage = 1, pageSize = 10) => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(res => res.data)
    },
    getProfile: (userId = 1000) => {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    unFollowToUser: (userId: number) => {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
    followToUser: (userId: number) => {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    }

}


export const profileAPI = {

    getProfile: (userId = 1000) => {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },


}


export const authMe = {
    me: () => {
        return instance.get(`auth/me`)
            .then(res => res.data)

    },
    login: (email: string, password: string, rememberMe: boolean, captcha?: boolean) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}