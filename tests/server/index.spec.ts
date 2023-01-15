import request from 'supertest'

import { server } from '~/server/index'

describe('GET /', () => {
  it('should return 200 and success message', async () => {
    await request(server).get('/').expect(200).expect({ data: 'hello world!' })
  })
})
