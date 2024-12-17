import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { TUser } from '../module/user/user.interface'
import User from '../module/user/user.model'
import { ILoginUser } from './auth.interface'

const register = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}
const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload?.email }).select('+password')
  console.log(user)

  if (!user) {
    throw new Error('User not found')
  }
  const userStatus = user?.userStatus

  if (userStatus === 'inactive') {
    throw new Error('User is blocked')
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password
  )
  if (!isPasswordMatched) {
    throw new Error('Password does not matched!!')
  }

  const userforCreateToken = {
    email: user?.email,
    role: user?.role,
  }

  const token = jwt.sign(userforCreateToken, 'secret', { expiresIn: '1d' })
  const verifiedUser={name:user?.name,email:user?.email,role:user?.role}

  return { token, verifiedUser }
}

export const authService = {
  register,
  login,
}
