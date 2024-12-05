import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: [true, 'Please enter your age'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      },
      message: '{VALUE} is not a valid mail',
    },
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    message: '{VALUE} is not valid, please provide valid status',
    required: true,
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    message: '{VALUE} is not valid, please provide valid status',
    required: true,
  },
})

// hook
// userSchema.pre('find', function (this, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

const User = model<TUser>('User', userSchema)
export default User
