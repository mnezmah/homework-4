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

router.post('/playlists',
  (req, res, next) => {
    Playlists
      .create(req.body)
      .then(newPlaylist => {
        res
          .status(200)
          .send(newPlaylist)
      })
      .catch(err =>
        res
          .status(500)
          .send(next(err)
          )
      )
  }
)

module.exports = router