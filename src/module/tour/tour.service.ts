import QueryBuilder from '../../builder/QueryBuilder'
import { TTour } from './tour.interface'
import Tour from './tour.model'

const createTour = async (payload: TTour) => {
  const result = await Tour.create(payload)
  return result
}

const getTours = async (query: Record<string, unknown>) => {

  // const queryObj = { ...query }

  // const searchTerm = query?.searchTerm || ''
  // //name, startLocation, endLocation
  // const excludingImportant = [
  //   'searchTerm',
  //   'page',
  //   'limit',
  //   'sortOrder',
  //   'sortBy',
  //   'fields',
  // ]
  // excludingImportant.forEach((field) => delete queryObj[field])
  // const searchableFields = ['name', 'startLocation', 'endLocation']

  // const result = Tour.find({
  //   $or: [
  //     { name: { $regex: searchTerm, $options: 'i' } },
  //     { startLocation: { $regex: searchTerm, $options: 'i' } },
  //     { locations: { $regex: searchTerm, $options: 'i' } },
  //   ],
  // })
  // const searchQuery = Tour.find({
  //   $or: searchableFields.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // })
  const searchableFields = ['name', 'startLocation', 'locations']
  const tours = new QueryBuilder(Tour.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await tours.modelQuery
  return result

  // const filterQuery = searchQuery.find(queryObj)

  // const page = Number(query?.page) || 1
  // const limit = Number(query?.limit) || 10
  // const skip = (page - 1) * limit
  // const paginatedQuery = filterQuery.skip(skip).limit(limit)

  // let sortStr

  // if (query?.sortBy && query?.sortOrder) {
  //   const sortBy = query?.sortBy
  //   const sortOrder = query?.sortOrder
  //   // "-price" othoba "price"
  //   sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
  // }

  // // const result = await paginatedQuery.sort(sortStr);
  // const sortQuery = paginatedQuery.sort(sortStr)

  // let fields = '-__v'
  // if (query?.fields) {
  //   fields = (query?.fields as string).split(',').join(' ')
  // }

  // const result = await sortQuery.select(fields)
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
