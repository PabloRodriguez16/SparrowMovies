const createCard = require("./createCards")

const showMovies = (data) => {
    const containerMovies = document.getElementById("contenedorPelis");
    
    data.forEach(movie => {
        containerMovies.appendChild(createCard(movie));
    });
};

module.exports= showMovies;