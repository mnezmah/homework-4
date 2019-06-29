const sequelize = require('express')
const db = require('../db')
const Playlists = require('../playlists/model')

const Songs = db.define(
  'songs',
  {
    title: {
      type: sequelize.STRING
    },
    artist: {
      type: sequelize.STRING
    },
    album: {
      type: sequeliza.STRING
    }
  }
)

Songs.belongsTp(Playlists)

module.exports = Songs