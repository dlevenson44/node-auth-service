import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
