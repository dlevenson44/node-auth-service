type Roles = 'admin' | 'user'

export interface User {
  id: string
  email: string
  password: string
  name?: string
  apps: Record<string, Roles>[]
}
