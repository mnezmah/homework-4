const { Router } = require('express')
const { toJWT, toData } = require('./jwt')

const router = new Router()

router
  .post(
    '/logins',
    (req, res) => {
      const email = req.body.email
      const password = req.body.password
      if (!email || !password) {
        res.status(400).send({
          message: 'Please supply a valid email and password'
        })
      } else {
        res.send({ jwt: toJWT({ userId: 1 }) })
      }
    })
  .catch(err => {
    console.error(err)
    res.status(500)
      .send({
        message: 'something wen wrong'
      })
  })

module.exports = router