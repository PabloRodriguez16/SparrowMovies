    const mongoose = require("mongoose");

    const moviesSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
            unique: true
        },
        year: {
            type: Number,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        genre: {
            type: Array,
            required: true
        },
        rate: {
            type: Number,
            required: true
        },
        poster: {
            type: String,
            required: true,
            unique: true
        }
    }, {collection: 'Movies' })

    const Movie =mongoose.model ("Movie", moviesSchema);

    module.exports = Movie;