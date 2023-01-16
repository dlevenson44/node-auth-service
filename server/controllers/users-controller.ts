import { User } from '~/server/models/user'
import type { User as UserType } from '~/server/types/user'

const usersController: Record<string, any> = {}

usersController.findAllUsers = (
  _req: unknown,
  res: Record<string, any>,
  next: any
) => {
  User.findAllUsers()
    .then((users: UserType[]) => res.json({
      status: 200,
      data: users
    })).catch(next)
}
