const SpotifyWebApi = require("spotify-web-api-node");

// Fetch authentication variables from the environment.
const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REDIRECT_URI: redirectUri
} = process.env;

if (!clientId || !clientSecret || !redirectUri) {
  throw new Error(
    `api: missing client info: clientId=${clientId}, clientSecret=` +
      `${clientSecret}, redirectUri=${redirectUri}`
  );
}

const scopes = ["playlist-modify-private"];
const spotifyAPI = new SpotifyWebApi({ clientId, clientSecret, redirectUri });

module.exports = {
  /**
   * createAuthorizeURL creates an authorization URL that the client should
   * be directed to in order to authenticate with the Spotify API.
   *
   * @param {string} state A unique state that will be passed to the callback
   *   URL along with the authentication data.
   * @returns {string}
   */
  createAuthorizeURL: function(state) {
    return spotifyAPI.createAuthorizeURL(scopes, state);
  }
};
