import mongoose from 'mongoose'

export interface TBooking {
  user: mongoose.Schema.Types.ObjectId
  tour: mongoose.Schema.Types.ObjectId
  bookedSlots: number
  bookingStatus: 'pending' | 'Paid' | 'cancelled'
  totalPrice: number
}


