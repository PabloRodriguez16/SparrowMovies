const Movie = require("../models/Movie")

module.exports = {
    returnMovies: async () => {
      try {
        const movie = await Movie.find()
        return movie;
      } catch {()=>{console.log("Error al obtener las peliculas")}};
    },

    createMovies: async (movie)=>{
      try {
        const newMovie = await Movie.create(movie);
        return newMovie;
      } catch (error) {
        console.log("Hubo un error" + error)
      }
    },
    showMovieByName: async (title)=> {
      try {
        const movie = await Movie.findOne({title})
        return movie
      } catch (error) {
        console.log("Error al obtener la película:", error);
        return null
      }
    }
}