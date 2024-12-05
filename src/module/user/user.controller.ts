//req and res manage

import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendRequest from '../../utils/sendRequest'
import { userService } from './user.service'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body
  const result = await userService.createUser(user)

  sendRequest(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created Successfully!',
    data: result,
  })
})

const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.getUser()

    sendRequest(res, {
      statusCode: StatusCodes.OK,
      message: 'User getting Successfully!',
      data: result,
    })
  }
)
const getSingleuser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const result = await userService.getSingleUser(id)

    sendRequest(res, {
      statusCode: StatusCodes.OK,
      message: 'Single User getting Successfully!',
      data: result,
    })
  }
)

const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const user = req.body
    const result = await userService.updateUser(id, user)

    sendRequest(res, {
      statusCode: StatusCodes.OK,
      message: 'User updated Successfully!',
      data: result,
    })
  }
)
const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const result = await userService.deleteUser(id)

    sendRequest(res, {
      statusCode: StatusCodes.OK,
      message: 'User delete Successfully!',
      data: result,
    })
  }
)

export const userController = {
  createUser,
  getUser,
  getSingleuser,
  updateUser,
  deleteUser,
}
