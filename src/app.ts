import express, { Request, Response } from 'express'
import authRoutes from './auth/auth.routes'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import { bookingRoutes } from './module/booking/booking.routes'
import tourRouter from './module/tour/tour.routes'
import userRouter from './module/user/user.router'
const app = express()

// middleware
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)
app.use('/api/booking', bookingRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Server Live ⚡')
})

app.use(globalErrorHandler)

export default app
