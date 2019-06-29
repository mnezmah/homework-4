const { Router } = require('express')
const Songs = require('./model')

const router = new Router()

router.get(
  '/playlists/:id/songs',
  (req, res, next) => {
    const id = req.params.id
    Songs
      .findAll()
      .then(songs => res.send(songs))
      .catch(err => next(err))
  }
)

module.exports = router