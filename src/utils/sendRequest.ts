import { Response } from 'express'

type TSuccessResponse<T> = {
  status?: boolean
  message: string
  data: T | T[] | null
}

const sendRequest = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.json({
    status: true,
    message: data.message,
    data: data.data,
  })
}

export default sendRequest
