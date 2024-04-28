const serviceMovies = require("../service/serviceMovies");

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await serviceMovies.returnMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    },

    getMoviesByName: async (req, res) => {
        try {
            const { title } = req.query;
    
            if (!title) {
                return res.status(400).json({ error: 'El título no puede estar vacío' });
            }

            const movie = await serviceMovies.showMovieByName(title);
            res.status(200).json(movie);
        } catch (error) {
            console.log("Error al obtener la película:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
    
    
}
