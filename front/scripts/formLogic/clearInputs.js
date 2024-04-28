    const clearValues = ()=>{

        const genres = document.querySelectorAll('input[type="checkbox"]');

        for (const genre of genres) {
            if (genre.checked) {
                genre.checked = false;
            }
        }

        const titleInput = document.getElementById("movieTitle");
        titleInput.value = "";
        const yearInput = document.getElementById("movieYear");
        yearInput.value = "";
        const directorInput = document.getElementById("movieDirector");
        directorInput.value = "";
        const durationInput = document.getElementById("movieDuration");
        durationInput.value = "";
        const rateInput = document.getElementById("movieRate");
        rateInput.value = "";
        const posterInput = document.getElementById("moviePoster");
        posterInput.value = "";
    }
    
    
module.exports=clearValues
