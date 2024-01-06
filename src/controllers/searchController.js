
const {tokenExpirationTime, refreshAccessToken, spotifyApi, currentTime } = require('../utils/middleware')
const getArtistAlbums = require('./albumController')



const handleSearchArtistContoller = {

 get:  async (req, res) => {
  console.log(req.body, "request body")
    const {artistName} = req.body
    if (!artistName){
        return res.status(400).json({"message": "Artist name not provided"})
    }

    if (currentTime <= tokenExpirationTime) {
      // Access token has expired, refresh it
      // await refreshAccessToken();
      refreshAccessToken()
    }

    spotifyApi.searchArtists(artistName)
  .then(function(data) {
    const artistId = data.body.artists.items[0].id

    // console.log(data.body.artists.items[0].id, "Artist Id")
    
    getArtistAlbums(artistId)
    console.log(`Search artists by ${artistName}`, data.body.artists.items[0]);
    res.json(data.body.artists.items[0])
  }, function(err) {
    console.error(err);
  });
 } 
}

 module.exports = handleSearchArtistContoller