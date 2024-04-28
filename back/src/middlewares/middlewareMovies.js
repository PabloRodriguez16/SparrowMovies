    const express = require('express');
    const app = express();


    function verificarDatosPelicula(req, res, next) {
        const { title, year, director, duration, genre, rate, poster } = req.body;


        if (!title || !year || !director || !duration || !genre || !rate || !poster) {
            return res.status(400).json({ error: 'Faltan datos de la película' });
        }

        next();
    }

    function verificarTitulo (req, res, next) {
        const {title} = req.query;

        if (!title) {return res.status(400).send({ error: "El título está vacío" });};

        next();
    }


    module.exports = {
        verificarTitulo,
        verificarDatosPelicula};