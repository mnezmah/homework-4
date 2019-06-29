const express = require('express')
const bodyParser = require('body-parser')
const playlistsRouter = require('./playlists/router')
const songsRouter = require('./songs/router') 
const authRouter = require('./auth/router')


const app = express()
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(playlistsRouter)
app.use(songsRouter)
app.use(authRouter)


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`listening on port ${port}`))