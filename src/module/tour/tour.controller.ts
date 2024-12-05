import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { catchAsync } from '../../utils/catchAsync'
import sendRequest from '../../utils/sendRequest'
import { tourService } from './tour.service'

const createTour = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await tourService.createTour(body)
  sendRequest(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Tour created Successfully!',
    data: result,
  })
})
const getSingleTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await tourService.getSingleTours(id)
  sendRequest(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour getting Successfully!',
    data: result,
  })
})
const getAllTour = catchAsync(async (req: Request, res: Response) => {
  const result = await tourService.getTours()
  sendRequest(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour getting Successfully!',
    data: result,
  })
})

const updateTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const body = req.body
  const result = await tourService.updateTours(id, body)
  sendRequest(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour update Successfully!',
    data: result,
  })
})
const deleteTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await tourService.deleteTours(id)
  sendRequest(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour delete Successfully!',
    data: result,
  })
})
const getNextSchedule = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await tourService.getNextSchedule(id)
  sendRequest(res, {
    statusCode: StatusCodes.OK,
    message: 'Tour getting Successfully!',
    data: result,
  })
})

export const tourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
