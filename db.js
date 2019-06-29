const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgress:secret@localhost:5431/postgres'

const sequelize = new Sequelize1(databaseUrl)

sequelize
  .sync()
  .then(() => console.log('db connected'))
  .catch(() => console.error)

  module.exports = sequelize