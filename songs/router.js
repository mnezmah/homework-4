const { Router } = require('express')
const Songs = require('./model')
const Playlists = require('../playlists/model')
const auth = require('../auth/middleware')

const router = new Router()

router.get(
  '/songs',
  auth,
  (req, res, next) => {
    Songs
      .findAll()
      .then(songs => res
        .status(200)
        .send(songs))
      .catch(err => next(err))
  }
)

router.get(
  '/songs/:id',
  auth,
  (req, res, next) => {
    const id = req.params.id

    Songs
      .findByPk(id)
      .then(song =>
        res
          .status(200)
          .send(song)
      )
      .catch(err =>
        res.status(404)
          .send(next(err))
      )
  }
)

router.get(
  '/playlists/:id/songs',
  auth,
  (req, res, next) => {
    console.log('THIS IS RES', res)
    const id = req.params.id

    Songs
      .findByPk(id, { include: [Playlists] })
      .then(songs => {
        res
          .status(200)
          .send(songs)
      })
      .catch(err =>
        res
          .status(404)
          .send(next(err))
      )
  }
)

router.post(
  '/songs',
  auth,
  (req, res, next) => {
    Songs
      .create(req.body)
      .then(newSong => {
        res
          .status(201)
          .send(newSong)
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
  '/songs/:id',
  auth,
  (req, res, next) => {
    const id = req.params.id
    Songs
      .destroy(
        { where: { id } }
      )
      .then(deletedsong => res
        .status(200)
        .json(deletedsong)
      )
      .catch(err => {
        res
          .status(404)
          .send(next(err))
      })
  }
)

module.exports = router