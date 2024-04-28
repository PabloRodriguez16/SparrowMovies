const express = require("express");
const moviesController = require("../controller/moviesController");
const postMoviesController = require("../controller/postMoviesController");
const {verificarDatosPelicula, verificarTitulo} = require("../middlewares/middlewareMovies");

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getMovies);

moviesRouter.get("/byname", verificarTitulo, moviesController.getMoviesByName)

moviesRouter.post("/", verificarDatosPelicula ,postMoviesController.createMovie)

module.exports= moviesRouter;