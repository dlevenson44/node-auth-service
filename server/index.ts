import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 8080

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ data: 'hello world!' })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

export const server = app
