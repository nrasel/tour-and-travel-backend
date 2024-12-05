import { Request, Response } from 'express'
import { tourService } from './tour.service'

const createTour = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const result = await tourService.createTour(body)
    res.send({
      success: true,
      message: 'Tour created successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await tourService.getSingleTours(id)
    res.send({
      success: true,
      message: 'Tour reterived successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours()
    res.send({
      success: true,
      message: 'Tour reterived successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await tourService.updateTours(id, body)
    res.send({
      success: true,
      message: 'Tour updated successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
const deleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const result = await tourService.deleteTours(id)
    res.send({
      success: true,
      message: 'Tour deleted successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const result = await tourService.getNextSchedule(id)
    res.send({
      success: true,
      message: 'Tour next scheducle get successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

export const tourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
