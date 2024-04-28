const serviceMovies = require("../service/serviceMovies")

module.exports= {
    createMovie: async (req, res)=> {
        console.log("Estoy funcionando")
        const {title, year, director, duration, genre, rate, poster} = req.body;
        try {
            const newMovie = await serviceMovies.createMovies({title, year, director, duration, genre, rate, poster});
        res.status(201).json(newMovie)
        } catch (error) {
            console.log("Error al crear la película" + error)
        }
    }
};