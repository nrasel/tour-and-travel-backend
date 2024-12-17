import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { userController } from './user.controller'
import { UserValidation } from './userValidation'
import auth from '../../middlewares/auth'

const userRouter = Router()

userRouter.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  userController.createUser
)
userRouter.get('/get-user', auth('admin'), userController.getUser)
userRouter.get('/get-user/:id', userController.getSingleuser)
userRouter.put('/update-user/:id', userController.updateUser)
userRouter.delete('/delete-user/:id', userController.deleteUser)

export default userRouter
