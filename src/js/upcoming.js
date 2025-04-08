const getUpcoming = async () => {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                resolve(res);
            })
            .catch(err => console.error(err));
    });
};


getUpcoming().then(res => {
    // Random number
    const randomIndex = Math.floor(Math.random() * res.results.length);
    // Get random movie
    const randomMovie = res.results[randomIndex];
    console.clear();
    // Image URL : https://image.tmdb.org/t/p/original/ ${film.backdrop_path}
    console.log("Upcoming Movies:", randomMovie);
    console.log("Upcoming Movies - Key:", Object.keys(randomMovie));
    console.log("Upcoming Movies - Title:", randomMovie.original_title);
    console.log("Upcoming Movies - Overview:", randomMovie.overview);
    console.log("Upcoming Movies - Release Date:", randomMovie.release_date);
    console.log("Upcoming Movies - Vote Average:", randomMovie.vote_average);
    console.log("Upcoming Movies - Vote Count:", randomMovie.vote_count);
    console.log("Upcoming Movies - Poster Path:", randomMovie.poster_path);
    console.log("Upcoming Movies - Backdrop Path:", randomMovie.backdrop_path);
    console.log("Upcoming Movies - Original Language:", randomMovie.original_language);
    console.log("Upcoming Movies - Original Title:", randomMovie.original_title);
    console.log("Upcoming Movies - Popularity:", randomMovie.popularity);
    console.log("Upcoming Movies - Video:", randomMovie.video);

    document.querySelector("#img-div-upcoming").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${randomMovie.poster_path})`;
    
})