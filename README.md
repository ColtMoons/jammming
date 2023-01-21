# Jammming
Jammming is a web app which connects jammming with a Spotify user account which help us to make 
request to the Spotify API in order to search for songs, artist or albums, add them into a 
playlist section, then change the name of the playlist and save the playlist into the spotify 
account. Also can delete from the list some track.

## Spotify API Endpoint Used
In this project I have used the authorization provided by Spotify API. I used [Implicit Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/)
in order to obtain the access token and the expiration of the token in the url.

### Endpoints:
```https://api.spotify.com/v1/search?type=track&q=TERM```

This endpoint is used for searching by a term. This is used for the serch of songs, artist or 
albums. 

```https://api.spotify.com/v1/me```

This help us to get the userId of the user who entered by login.

```https://api.spotify.com/v1/users/USER_ID/playlists```

This is use in order to create a Playlist in the body it accepts an json object with name 
property. And this endpoint is a POST endpoint and in the body response we can have the playlist id which help us to add the tracks.

```https://api.spotify.com/v1/users/USER_ID/playlists/PLAYLIST_ID/tracks```

This endpoint have the POST method in order to add tracks into the playlist created with the above endpoint.

## Run the project in local enviroment

In order to run the project in a local enviroment have to change in the src/util/Spotify.js the 
client id to the client id provided by your Spotify Dashboard and redirect Uri to the redirect 
uri set in the Spotify dashboard, if you are running in a local enviroment both of them should
be http://localhost:3000. 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
