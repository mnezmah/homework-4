const Sequelize = require('sequelize')
const db = require('../db')
const Playlists = require('../playlists/model')

const Songs = db.define(
  'songs',
  {
    title: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    },
    album: {
      type: Sequelize.STRING
    }
  }
)

Songs.belongsTo(Playlists)

module.exports = Songs