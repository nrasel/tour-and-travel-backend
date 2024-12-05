import { Model } from 'mongoose'

export interface TTour {
  name: string
  durationHours: number
  averageRating: number
  price: number
  coverImage: string
  images: string[]
  startDates: Date[]
  startLocation: string
  locations: string[]
  slug: string
}

export interface TTourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null
    estimateEndDate: Date | null
  }
}
type TTourModel = Model<TTour, Record<string, unknown>, TTourMethods>
export default TTourModel
