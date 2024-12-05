import { model, Schema } from 'mongoose'
import { TBooking } from './booking.interface'

const bookingSchema = new Schema<TBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Replace 'User' with the actual name of your User model
      required: true,
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour', // Replace 'Tour' with the actual name of your Tour model
      required: true,
    },
    bookedSlots: {
      type: Number,
      required: true,
      min: 1,
    },
    bookingStatus: {
      type: String,
      enum: ['pending', 'Paid', 'cancelled'],
      default: 'pending',
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
)

const Booking = model('Booking', bookingSchema)

export default Booking
