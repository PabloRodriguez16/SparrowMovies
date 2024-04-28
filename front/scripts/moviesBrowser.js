const axios = require("axios");
const showMovie = require("./resultMovie")

const movieTitle = async () => {
    const title = document.getElementById("browserInput").value;
    console.log(title)
    if (!title) {
        alert("El valor está vacio");
        return
    }
    try {
        const response = await axios.get(`http://localhost:3000/movies/byname?title=${title}`);
        const movies = response.data;
        if (movies === null) alert("No se encontraron películas con ese nombre...")
        showMovie(movies)
    } catch (error) {
        console.log("Error al realizar la solicitud:", error.message);
    }
}


const browserBar = document.getElementById("browserInput")
browserBar?.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        movieTitle()
    }
})

const browserButton = document.getElementById("browserButton");
browserButton?.addEventListener("click", movieTitle);
