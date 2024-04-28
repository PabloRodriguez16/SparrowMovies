const axios = require("axios");
const clearValues = require("./formLogic/clearInputs")
const inputs = require("./formLogic/addMovie")
const moviesBrowser = require("./moviesBrowser")

const showMovies = require("./showMovies")

if (window.location.href === "http://127.0.0.1:8080/index.html" || window.location.href === "http://127.0.0.1:8080/") {
    async function movies() {
        try {
            const response = await axios.get("http://localhost:3000/movies");
                const responseData = response.data;
                showMovies(responseData);
        } catch (error) {
            console.log("Error al realizar la solicitud:", error.message);
        }
    }
    
    movies();
    
}

const agregar = document.getElementById("agregar");
agregar?.addEventListener("click", inputs);


const vaciarCampos = document.getElementById("vaciarCampos");
vaciarCampos?.addEventListener("click", clearValues)



