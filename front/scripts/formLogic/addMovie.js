const Form = require("./classForm")

const inputs = () => {
        const titleInput = document.getElementById("movieTitle");
        const titleInputValue = titleInput.value;
        const yearInput = document.getElementById("movieYear");
        const yearInputValue = yearInput.value;
        const directorInput = document.getElementById("movieDirector");
        const directorInputValue = directorInput.value;
        const durationInput = document.getElementById("movieDuration");
        const durationInputValue = durationInput.value;
        const rateInput = document.getElementById("movieRate");
        const rateInputValue = rateInput.value;
        const posterInput = document.getElementById("moviePoster");
        const posterInputValue = posterInput.value;

        const currentDate = new Date().getFullYear()
        
        if (!titleInputValue || !yearInputValue || !directorInputValue || !durationInputValue || 
            !rateInputValue || !posterInputValue) {
                alert("Alguno de los datos están mal...");
                return
            } else if (yearInputValue > currentDate){
                alert("Coloca una fecha válida...");
                return
            } else if (isNaN(rateInputValue) || rateInputValue < 0.1 || rateInputValue > 10){
                alert("Coloca un puntaje válido...");
                return
            }
            
            const genres = document.querySelectorAll('input[type="checkbox"]');
            const genresTrue = [];
            
        for (const genre of genres) {
            if (genre.checked) {
                genresTrue.push(genre.name);
            }
        }
        if (genresTrue.length < 1){
            alert("Coloca al menos un género");
            return
        }

        const form = new Form(titleInputValue, yearInputValue, directorInputValue, durationInputValue, genresTrue, rateInputValue, posterInputValue);
        enviarDatos(form); 
    };

    const enviarDatos = async (form) => {
        try {
            const response = await axios.post("http://localhost:3000/movies", form);
            console.log("Respuesta del servidor:", response.data);
        } catch (error) {
            console.log("Error al enviar los datos:", error.message);
        }
    };

module.exports= inputs;