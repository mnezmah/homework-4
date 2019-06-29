const { Router } = require('express')
const Playlists = require('./model')

const router = new Router()

router.get(
  '/playlists',
  (req, res, next) =>
    Playlists
      .findAll()
      .then(players => res.send(players))
      .catch(err => next(err))
)

module.exports = router