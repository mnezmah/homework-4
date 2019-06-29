const sequelize = require('sequelize')
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
      type: sequelize.STRING
    }
  }
)

Songs.belongsTo(Playlists)

module.exports = Songs