const { spotifyApi } = require('../utils/middleware')

const getArtistAlbums = (artistId)=>{
    spotifyApi.getArtistAlbums(artistId, { limit: 4, offset: 20 })
    .then(
        function(data) {
          console.log('Album information', data.body);
        },
        function(err) {
          console.error(err);
        })    
}

module.exports = getArtistAlbums