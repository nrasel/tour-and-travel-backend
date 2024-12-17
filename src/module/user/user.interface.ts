import { USER_ROLE } from "./user.constant"

export interface TUser {
  name: string
  password: string
  age: number
  email: string
  photo?: string | null
  role: 'user' | 'admin'
  userStatus: 'active' | 'inactive'
}

export type TUserRole = keyof typeof USER_ROLE