const express = require("express");
const moviesRouter = require("./moviesRouter");

const router = express.Router();

router.use("/movies", moviesRouter);

module.exports = router