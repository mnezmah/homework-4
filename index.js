const express = require('express')
const app = express()
const db = require('./db')

const playlists = require('./playlists/model')

const port = process.env.PORT || 4000
app.listen(port, () => console.log (`listening on port ${port}`))