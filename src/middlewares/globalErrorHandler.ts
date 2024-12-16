import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

type TErrorResponse = {
  success: boolean
  message: string
  error: any
}

export const globalErrorHandler = (
  err: TErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof mongoose.Error.CastError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message,
      error: err,
    })
  } else if (err instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}
