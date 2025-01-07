import express from 'express'
import { Request, Response } from 'express-serve-static-core'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Week Planner' })
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
