import { TUser } from './user.interface'
import User from './user.model'

const createUser = async (user: TUser): Promise<TUser> => {
  const result = await User.create(user)
  return result
}

const getUser = async () => {
  const result = await User.find()

  return result
}
const getSingleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}
const updateUser = async (id: string, data: TUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id, {
    new: true,
  })
  return result
}

export const userService = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
