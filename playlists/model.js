const Sequelize = require('sequelize')
const db = require('../db')

const Playlists = db.define(
  'playlists',
  {
    name: {
      type: Sequelize.STRING
    }
  }
)

module.exports = Playlists