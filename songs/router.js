const { Router } = require('express')
const Songs = require('./model')
const Playlists = require('../playlists/model')

const router = new Router()

router.get(
  '/songs',
  (req, res, next) => {
    Songs
      .findAll()
      .then(songs => res.send(songs))
      .catch(err => next(err))
  }
)

router.get(
  '/playlists/:id/songs',
  (req, res, next) => {
    console.log('THIS IS RES', res)
    const id = req.params.id
    Songs
      .findbyPk(id, { include: [Playlists] })
      .then(songs => {
        res
          .status(200)
          .send(songs)
      })
      // console.log('SONGS ARE', songs)
      .catch(err => next(err))
  }
)

router.post(
  '/songs',
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
          .status(500)
          .send(next(err)
          )
      )
  }
)

module.exports = router