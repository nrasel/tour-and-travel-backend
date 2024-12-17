import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { handleCastError } from '../helpers/handleCastError'
import { handlerDuplicateError } from '../helpers/handleDuplicateError'
import { handleGenericError } from '../helpers/handleGenericError'
import { handleValidationError } from '../helpers/handleValidationError'
import { handlerZodError } from '../helpers/handleZodError'

// type TErrorResponse = {
//   success: boolean
//   message: string
//   error: any
// }

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err && err.name === 'ZodError') {
    handlerZodError(err, res)
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res)
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res)
  } else if (err.code && err.code === 11000) {
    handlerDuplicateError(err, res)
  } else if (err instanceof Error) {
    handleGenericError(err, res)
  }
}
