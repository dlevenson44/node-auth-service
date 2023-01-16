import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import type  { Express, Request, Response } from 'express'

dotenv.config()

const app: Express = express()
const port = process.env.SERVER_PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ data: 'hello world!' })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

export const server = app
