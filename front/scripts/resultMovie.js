
const showMovie = (movie) => {
    const { title, year, director, duration, genre, rate, poster } = movie;

    const card = document.createElement("div");
    card.classList.add("tarjetas1");

    const titulo = document.createElement("h2");
    titulo.textContent = title;
    titulo.classList.add("title1");

    const año = document.createElement("p");
    año.textContent = "Año: " + year;
    año.classList.add("year");

    const autor = document.createElement("p");
    autor.textContent = "Director: " + director;
    autor.classList.add("director");

    const duración = document.createElement("p");
    duración.textContent = "Duración: " + duration;
    duración.classList.add("duration");

    const genero = document.createElement("p");
    genero.textContent = "Género/s: " + genre.join(", ");
    genero.classList.add("genre");

    const puntaje = document.createElement("p");
    puntaje.textContent = "Puntaje: " + rate;
    puntaje.classList.add("rate");

    const portada = document.createElement("img");
    portada.src = poster;
    portada.classList.add("poster1");

    card.appendChild(titulo);
    card.appendChild(año);
    card.appendChild(autor);
    card.appendChild(duración);
    card.appendChild(genero);
    card.appendChild(puntaje);

    const a = document.createElement("a");
    a.href = "/pages/Error.html";
    a.appendChild(portada);

    const containerMovie = document.getElementById("resultadoDeBusqueda");
    while (containerMovie.firstChild) {
        containerMovie.removeChild(containerMovie.firstChild);
    }

    containerMovie.appendChild(a);
    containerMovie.appendChild(card);
};

module.exports= showMovie;