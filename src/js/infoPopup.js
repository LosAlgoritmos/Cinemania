const infoPopup = document.querySelector('.infoPopup');
const closeBtn = document.querySelector('.closeBtn');

infoPopup.style.display = 'none';
closeBtn.addEventListener('click', () => {
  infoPopup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === infoPopup) {
    infoPopup.style.display = 'none';
  }
});

// @murselsen
export const renderMovieInfoPopup = (movie) => {
  const iPopup = document.querySelector('.infoPopup');
  iPopup.style.display = 'flex';
  console.log("InfoPopup - Movie data:", movie);
  // iMovieTitle
  iPopup.querySelector("#iMovieTitle").textContent = movie.original_title || movie.original_name;
  // iMovieVote
  iPopup.querySelector('#iMovieVote').textContent = movie.vote_average;
  // iMovieVotes
  iPopup.querySelector('#iMovieVotes').textContent = movie.vote_count;
  // iMoviePopularity
  iPopup.querySelector('#iMoviePopularity').textContent = movie.popularity.toFixed(1);
  // iMovieGenres
  const genreMovie = {
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
  iPopup.querySelector('#iMovieGenres').textContent = movie.genre_ids.map(genreId => genreMovie[genreId]).join(', ');
  // iMovieOverview
  iPopup.querySelector('#iMovieOverview').textContent = movie.overview;
  // iMoviePoster 
  const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
  iPopup.querySelector('#iMoviePoster').src = posterBaseUrl + movie.poster_path;
};