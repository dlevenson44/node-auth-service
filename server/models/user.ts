import { db } from '~/server/db/config'

export const User: Record<string, any> = {}

User.findAllUsers = () =>
  db.query('SELECT * FROM users')
