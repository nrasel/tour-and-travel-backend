import express, { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { bookingRoutes } from './module/booking/booking.routes'
import tourRouter from './module/tour/tour.routes'
import userRouter from './module/user/user.router'
const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)
app.use('/api/booking', bookingRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Server Live ⚡')
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  })
})

export default app
