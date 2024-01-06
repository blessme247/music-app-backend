const express = require('express');

const artistRouter = require('./artist.route')

const router = express.Router();

router.use("/artist", artistRouter);

module.exports = router