import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendRequest from '../../utils/sendRequest'
import { bookingService } from './booking.service'

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await bookingService.createBooking(body)
  sendRequest(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Booking created Successfully!',
    data: result,
  })
})

export const bookingController = {
  createBooking,
}
