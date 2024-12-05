import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/create-user', userController.createUser)
userRouter.get('/get-user', userController.getUser)
userRouter.get('/get-user/:id', userController.getSingleuser)
userRouter.put('/update-user/:id', userController.updateUser)
userRouter.delete('/delete-user/:id', userController.deleteUser)

export default userRouter
