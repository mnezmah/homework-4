## Fake Spotify API


### instalation

1. run `npm i` to install

2.  run `npm run start` to star the app

3. open your browser on localhost:4000

4. install [httpie.org](HTTPie) for interacting with this API

### using the API

1. create an user :
`http post :4000/user email=<your mail> password=<your password>`

2. go to login: 
`http post :4000/logins email=<your mail> password=<your password>`
*then you will get a token
*copy that token

* now you can go and create a playlists:
`http post :4000/playlists name=<Your playlist name> Authorization:"Bearer <paste your token here>"`

* same way you can create a song:
`http post :4000/songs name=<Your song name> Authorization:"Bearer <paste your token here>"`


* show all playlists
`http :4000/playlists Authorization:"Bearer <paste your token here>"`

* show single playlist
`http :4000/playlists/<valid playlist id>  Authorization:"Bearer <paste your token here>"`

* deleting a playlist
`http delete :4000/playlists/<valid playlist id>  Authorization:"Bearer <paste your token here>"`

* deleting a song
`http delete :4000/songs/<valid song id>  Authorization:"Bearer <paste your token here>"`

