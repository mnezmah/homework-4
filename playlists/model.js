const sequelize = require('sequelize')
const db = require('../db')

const playlists = db.define(
  'playlists',
  {
    name: {
      type: sequelize.STRING
    }
  }
)

module.exports = playlists