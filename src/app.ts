import express, { Request, Response } from 'express'
import tourRouter from './module/tour/tour.routes'
import userRouter from './module/user/user.router'
const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Server Live ⚡')
})

export default app
