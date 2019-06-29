const { Router } = require('express')
const Playlists = require('./model')
const auth = require('../auth/middleware')

const router = new Router()

router.get(
  '/playlists',
  auth,
  (req, res, next) =>
    Playlists
      .findAll()
      .then(playlist => res.send(playlist))
      .catch(err => next(err))
)

router.get(
  '/playlists/:id',
  auth,
  (req, res, next) => {
    const id = req.params.id

    Playlists
      .findByPk(id)
      .then(playlist =>
        res
          .status(200)
          .send(playlist)
      )
      .catch(err =>
        res.status(404)
          .send(next(err))
      )
  }
)

router.post(
  '/playlists',
  auth,
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
          .status(422)
          .send(next(err)
          )
      )
  }
)

router.delete(
  '/playlists/:id',
  auth,
  (req, res, next) => {
    const id = req.params.id
    Playlists
      .destroy(
        { where: { id } }
      )
      .then(destroyedPlaylist => res
        .status(200)
        .json(destroyedPlaylist)
      )
      .catch(err => {
        res
          .status(404)
          .send(next(err))
      })
  }
)

module.exports = router