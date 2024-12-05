import { TTour } from './tour.interface'
import Tour from './tour.model'

const createTour = async (payload: TTour) => {
  const result = await Tour.create(payload)
  return result
}

const getTours = async () => {
  const result = Tour.find()
  return result
}

const getSingleTours = async (id: string) => {
  const result = Tour.findById(id)
  return result
}
const updateTours = async (id: string, payload: Partial<TTour>) => {
  const result = Tour.findByIdAndUpdate(id, payload)
  return result
}

const deleteTours = async (id: string) => {
  const result = Tour.findByIdAndDelete(id)
  return result
}

const getNextSchedule = async (id: string) => {
  const tour = await Tour.findById(id)
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate()

  return {
    tour,
    nextSchedule,
  }
}

export const tourService = {
  createTour,
  getSingleTours,
  getTours,
  updateTours,
  deleteTours,
  getNextSchedule,
}
