const sequelize = require('sequelize')
const db = require('../db')

const Playlists = db.define(
  'playlists',
  {
    name: {
      type: sequelize.STRING
    }
  }
)

module.exports = Playlists