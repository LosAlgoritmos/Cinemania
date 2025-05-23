import {isLocalMovieById,
    addMovieToLocalStorage,removeMovieToLocalStorage
} from './infoPopup.js';
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
    // console.clear();
    // Image URL : https://image.tmdb.org/t/p/original/ ${film.backdrop_path}


    document.querySelector("#img-div-upcoming").style.backgroundImage = `url(https://image.tmdb.org/t/p/original${randomMovie.poster_path})`;
    document.querySelector("#upcoming-title").textContent = randomMovie.original_title;
    document.querySelector("#upcoming-date").textContent = randomMovie.release_date;
    document.querySelector("#upcoming-vote").textContent = randomMovie.vote_average.toFixed(1);
    document.querySelector("#upcoming-votes").textContent = randomMovie.vote_count;
    document.querySelector('#upcoming-popularity').textContent = randomMovie.popularity;

    const upComingGenreMap = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    };
    document.querySelector('#upcoming-genres').textContent = randomMovie.genre_ids.map(genre => upComingGenreMap[genre]).join(', ');
    document.querySelector('#upcoming-overview').textContent = randomMovie.overview;

    if(!isLocalMovieById(randomMovie.id)) {
        document.querySelector('#upcoming-add-library').style.display = 'block';
        document.querySelector('#upcoming-remove-library').style.display = 'none';
    } else {
        document.querySelector('#upcoming-add-library').style.display = 'none';
        document.querySelector('#upcoming-remove-library').style.display = 'block';
    }
     
    document.querySelector('#upcoming-add-library').addEventListener('click', e => {
        
        e.target.style.display = 'none';

        addMovieToLocalStorage(randomMovie);

        document.querySelector('#upcoming-remove-library').style.display = 'block';
    });
    document.querySelector('#upcoming-remove-library').addEventListener("click", e => {
   
        document.querySelector('#upcoming-remove-library').style.display = 'none';
        removeMovieToLocalStorage(randomMovie);
        document.querySelector('#upcoming-add-library').style.display = 'block';
    })

})