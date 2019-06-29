## Fake Spotify app

### how to use

1. run `npm i` to install

2.  run `npm run start` to star the app

3. open your browser on localhost:4000

4. create an user :
`http post :4000/user email=<your mail> password=<your password>`

5. go to login: 
`http post :4000/logins email=<your mail> password=<your password>`
then you will get a token
copy that token

6. now you can go and create a playlists:
`http post :4000/playlists name=<Your playlist name> Authorization:"Bearer <paste your token here>"`

7. same way you can creat a song:
`http post :4000/songs name=<Your song name> Authorization:"Bearer <paste your token here>"`
