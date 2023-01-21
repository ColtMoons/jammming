let userAccessToken;
// client information from spotify Dashboard
const clientID = "97b2046647c54f6f88d6e55a1b4466b2";
const redirectURI = "http://localhost:3000";

const Spotify = {
  getAccessToken() {
    // when there is a userAccessToken return it
    if (userAccessToken) {
      return userAccessToken;
    }

    // if there is no user access token search for access token and expise in
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    // if there is access token and expires in information
    if (accessTokenMatch && expiresInMatch) {
      //update userAccess token
      userAccessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // This clears the parameters, allowing us to grab a new acces token when it expires
      window.setTimeout(() => (userAccessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return userAccessToken;
    } else {
      // If there is no access token and expires in then redirect to accesURL
      const accessURL =
        "https://accounts.spotify.com/authorize?client_id=" +
        clientID +
        "&response_type=token&scope=playlist-modify-public&redirect_uri=" +
        redirectURI;

      // window.location = accesURL redirects our web page to the access url
      window.location = accessURL;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }

        return jsonResponse.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          };
        });
      });
  },

  savePlaylist(name, uriList) {
    if (!name || !uriList.length) {
      return;
    }

    const accesToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accesToken}` };
    let userID;

    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userID = jsonResponse.id;

        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({name: name}),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`,
              {
                method: "POST",
                headers: headers,
                body: JSON.stringify({ uris: uriList }),
              }
            );
          });
      });
  },
};

export default Spotify;
