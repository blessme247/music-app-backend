const express = require('express');

const handleSearchArtistController = require('../controllers/searchController')

const artistRouter = express.Router();

artistRouter.post("/", handleSearchArtistController.get);

module.exports = artistRouter