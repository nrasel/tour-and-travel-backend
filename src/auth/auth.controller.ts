import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../utils/catchAsync'
import sendRequest from '../utils/sendRequest'
import { authService } from './auth.service'

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.register(req.body)

  sendRequest(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created Successfully!',
    data: result,
  })
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.login(req.body)

  sendRequest(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User login Successfully!',
    token: result?.token,
    data: result?.verifiedUser,
  })
})

export const AuthController = {
  register,
  login,
}
