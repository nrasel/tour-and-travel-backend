import { Router } from 'express'
import validateRequest from '../middlewares/validateRequest'
import { UserValidation } from '../module/user/userValidation'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'

const authRoutes = Router()

authRoutes.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  AuthController.register
)
authRoutes.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.login
)

export default authRoutes
