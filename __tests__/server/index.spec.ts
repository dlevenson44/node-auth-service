import request from "supertest"
// import { Express } from 'express-serve-static-core'

import { server } from '../../server'

describe('GET /', () => {
  it('should return 200 and success message', async () => {
    await request(server).get('/').expect(200).expect({ data: 'hello world!' })
  })
})



