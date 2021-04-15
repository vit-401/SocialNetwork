import axios from 'axios'
import {UsersType} from '../redux/users-reducer'

export const axiosInstance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
   },
})

export type APIResponseType<D = {}, RC = ResultCodes> = {
   data: D
   messages: string[]
   resultCode: RC
}

export enum ResultCodes {
   Success = 0,
   Error = 1,
}

export enum ResultCodeCaptcha {
   CaptchaIsRequired = 10
}

export type GetItemsType = {
   items: UsersType[]
   totalCount: number
   error: string | null
}
