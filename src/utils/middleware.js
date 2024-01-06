require('dotenv').config()
let SpotifyWebApi = require('spotify-web-api-node');

 let spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTITY_CLIENT_ID,
    clientSecret: process.env.SPOTITY_CLIENT_SECRET,
  });
  
   let tokenExpirationTime
  
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      
      tokenExpirationTime = new Date()
      tokenExpirationTime.setSeconds(tokenExpirationTime.getSeconds() + data.body['expires_in']);
      console.log(tokenExpirationTime, "tokenExpirationTime time")

  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );

  const currentTime = new Date();


  // Function to refresh the access token
 const refreshAccessToken = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the new access token
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (error) {
    console.log('Error refreshing access token', error);
  }
};


module.exports = {
    spotifyApi,
    tokenExpirationTime,
    currentTime,
    refreshAccessToken,
  };