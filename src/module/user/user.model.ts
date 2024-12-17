import bcrypt from 'bcrypt'
import { model, Schema } from 'mongoose'
import config from '../../config'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    select: false,
  },
  age: {
    type: Number,
    // required: [true, 'Please enter your age'],
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
    default: 'active',
  },
})

userSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  )
  next()
})

userSchema.post('save', function (doc, next) {
  ;(doc.password = ''), next()
})

const User = model<TUser>('User', userSchema)
export default User
