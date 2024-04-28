const createCard = (movie) => {
    const { title, year, director, duration, genre, rate, poster } = movie;

    const card = document.createElement("div");
    card.classList.add("tarjetas");

    const posterImg = document.createElement("img");
    posterImg.classList.add("poster");
    posterImg.src = poster;
    card.appendChild(posterImg);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");
    movieInfo.innerHTML = `
        <h2 class="title">${title}</h2>
        <h3 class="info">Año: ${year}</h3>
        <h3 class="info">Director: ${director}</h3>
        <h3 class="info">Duración: ${duration}</h3>
        <h3 class="info">Género: ${genre.join(", ")}</h3>
        <h3 class="info">Puntaje: ${rate}</h3>
    `;
    card.appendChild(movieInfo);

    const a = document.createElement("a")
    a.classList.add("a");
    a.href = "/pages/Error.html"
    a.appendChild(card);
    return a;
}

module.exports = createCard;
