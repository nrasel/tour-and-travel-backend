//req and res manage

import { Request, Response } from 'express'
import sendRequest from '../../utils/sendRequest'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const result = await userService.createUser(user)

    sendRequest(res, { message: 'User created Successfully!', data: result })
  } catch (error) {
    res.json({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}

const getUser = async (req: Request, res: Response) => {
  const result = await userService.getUser()

  res.json({
    success: true,
    message: 'Users getting successfully',
    data: result,
  })
}
const getSingleuser = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await userService.getSingleUser(id)

  res.json({
    success: true,
    message: 'Single user getting successfully',
    data: result,
  })
}

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id
  const user = req.body
  const result = await userService.updateUser(id, user)

  res.json({
    success: true,
    message: 'Successfully update an user',
    data: result,
  })
}
const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await userService.deleteUser(id)

  res.json({
    success: true,
    message: 'User deleted successfully',
    data: result,
  })
}

export const userController = {
  createUser,
  getUser,
  getSingleuser,
  updateUser,
  deleteUser,
}
