const httpStatus = require('http-status')
const request = require('supertest')
const app = require('../config/app.config')

// const okObject = {
//   message: () => "Ok",
//   pass: true,
// }

// expect.extend({
//   jsonToNull(r, a) {
//     if (r === null) return okObject
//     if (expect(r).toEqual(expect.any(Array))) return okObject
//     if (expect(r).toEqual(expect.any(Object))) return okObject

//     return {
//       message: () => `expected ${r} to be ${a} type or null`,
//       pass: false,
//     }
//   },
//   byPass() {
//     return okObject
//   }
// })

describe('AuthController', () => {
  it('login -> me -> logout', async () => {
    const formData = {
      email: 'admin@app.com',
      password: 'password',
    }

    // === LOGIN ===
    const login = await request(app)
      .post('/api/v1/auth/login')
      .send(formData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
    if (login.status === httpStatus.OK) {
      expect(login.body.data).toEqual(
        expect.objectContaining({
          token: expect.any(String)
        })
      )
      expect(login.body.header).toEqual(
        expect.objectContaining({
          status: httpStatus.OK,
          message: expect.any(String)
        })
      )
      
      // === ME ===
      const me = await request(app)
        .get('/api/v1/auth/me')
        .set('Authorization', `Bearer ${login.body.data.token}`)
        .expect('Content-Type', /json/)
      if (me.status === httpStatus.OK) {
        expect(me.body.data).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            email: expect.any(String),
            phone: expect.any(String),
          })
        )
        expect(me.body.header).toEqual(
          expect.objectContaining({
            status: httpStatus.OK,
            message: expect.any(String)
          })
        )
      } else {
        expect(me.body.data).toBeNull()
        expect(me.body.header).toEqual(
          expect.objectContaining({
            status: httpStatus.UNAUTHORIZED,
            message: expect.any(String)
          })
        )
      }

      // === LOGOUT ===
      const logout = await request(app)
        .patch('/api/v1/auth/logout')
        .set('Authorization', `Bearer ${login.body.data.token}`)
        .expect('Content-Type', /json/)
      if (logout.status === httpStatus.OK) {
        expect(logout.body.data).toBeTruthy()
        expect(logout.body.header).toEqual(
          expect.objectContaining({
            status: httpStatus.OK,
            message: expect.any(String)
          })
        )
      } else {
        expect(logout.body.data).toBeNull()
        expect(logout.body.header).toEqual(
          expect.objectContaining({
            status: httpStatus.UNAUTHORIZED,
            message: expect.any(String)
          })
        )
      }

    } else {
      expect(login.body.data).toBeNull()
      expect(login.body.header).toEqual(
        expect.objectContaining({
          status: httpStatus.UNPROCESSABLE_ENTITY,
          message: expect.any(String)
        })
      )
    }
  })
})