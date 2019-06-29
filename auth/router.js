const { Router } = require('express')
const { toJWT, toData } = require('./jwt')
const User = require('../users/model')
const bcrypt = require('bcrypt')

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
        User
          .findOne({
            where: {
              email: req.body.email
            }
          })
          .then(entity => {
            if (!entity) {
              res
                .status(400)
                .send({ message: 'User with that email does not exist' })
            }
            if (bcrypt.compareSync(req.body.password, entity.password)) {
              res.send({ jwt: toJWT({ userId: entity.id }) })
            }
            else {
              res
                .status(400)
                .send({ message: 'Incorrect Password ' })
            }
          })
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