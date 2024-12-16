import mongoose from 'mongoose'
import Tour from '../tour/tour.model'
import { TBooking } from './booking.interface'
import Booking from './booking.model'

const createBooking = async (payload: TBooking): Promise<TBooking> => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const { tour, bookedSlots } = payload
    const requiredTour = await Tour.findById(tour)

    if (!requiredTour) {
      throw new Error('Tour not found')
    }

    const totalPrice = requiredTour.price * bookedSlots

    payload.totalPrice = totalPrice
    payload.bookingStatus = 'pending'

    if (requiredTour.availableSeats < bookedSlots) {
      throw new Error('Not enough seats available!')
    }
    const result = await Booking.create([payload], { session })

    const updatedTour = await Tour.findByIdAndUpdate(
      result[0].tour,
      { $inc: { availableSeats: -bookedSlots } },
      { new: true }
    )

    if (!updatedTour) {
      throw new Error('Failed to update tour!')
    }
    await session.commitTransaction()
    await session.endSession()
    return result[0]
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}

/*
 *Boking using transaction roll back
 *
 * ooking cancel-booking model
 *
 * Tour AvailableSeats=availableSeats+BookedSlot-Tour Model
 */

export const bookingService = {
  createBooking,
}
