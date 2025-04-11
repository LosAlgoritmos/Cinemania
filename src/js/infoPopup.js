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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    infoPopup.style.display = "none";
  }
});

// @murselsen

export const isLocalMovieById = (movieId) => {
  const localLibraryStorage = JSON.parse(localStorage.getItem('myLibrary')) || [];
  const findMovie = localLibraryStorage.find(movie => movie.id === Number(movieId));
  if (findMovie) {
    return true;
  } else {
    return false;
  }
};

// @murselsen
export const renderMoiveLocalActionBtn = (movieId) => {

  const findMovie = isLocalMovieById(movieId);
  if (findMovie) {
    document.querySelector('#iMovieLocalAddBtn').style.display = 'none';
    document.querySelector('#iMovieLocalRemoveBtn').style.display = 'block';
  } else {
    document.querySelector('#iMovieLocalAddBtn').style.display = 'block';
    document.querySelector('#iMovieLocalRemoveBtn').style.display = 'none';
  }
};

// @murselsen
export const addMovieToLocalStorage = (movie_data) => {
  const localMyLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
  
  if(!isLocalMovieById(movie_data.id)){
    localMyLibrary.push(movie_data);
    localStorage.setItem('myLibrary', JSON.stringify(localMyLibrary));
  }else{
    localStorage.setItem('myLibrary', JSON.stringify(localMyLibrary));

  }
  console.log("localMyLibrary", localMyLibrary);

  // renderMoiveLocalActionBtn
  renderMoiveLocalActionBtn(movie_data.id);
};

// @murselsen

export const removeMovieToLocalStorage = (movie_data) => {
  const localArray = JSON.parse(localStorage.getItem('myLibrary') || []);
  const updatedArray = localArray.filter(m => m.id !== movie_data.id);
  localStorage.setItem('myLibrary', JSON.stringify(updatedArray));

  // renderMoiveLocalActionBtn
  renderMoiveLocalActionBtn(movie_data.id);
};

// @murselsen
export const renderMovieInfoPopup = (movie) => {
  console.log("Info Popup Movie", movie);
  const iPopup = document.querySelector('.infoPopup');
  iPopup.style.display = 'flex';
  // iMovieTitle
  iPopup.querySelector("#iMovieTitle").textContent = movie.original_title || movie.title;
  // iMovieVote
  iPopup.querySelector('#iMovieVote').textContent = movie.vote_average;
  // iMovieVotes
  iPopup.querySelector('#iMovieVotes').textContent = movie.vote_count;
  // iMoviePopularity
  iPopup.querySelector('#iMoviePopularity').textContent = movie.popularity;
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
  // document.querySelector("#iMoviePosterMobile").getAttribute("srcset")
  iPopup.querySelector("#iMoviePosterMobile").setAttribute("srcset", posterBaseUrl + movie.poster_path);
  iPopup.querySelector("#iMoviePosterTablet").setAttribute("srcset", posterBaseUrl + movie.poster_path);
  // isLocalMovieById
  renderMoiveLocalActionBtn(movie.id);
  // iMovieLocalAddBtn
  document.querySelector('#iMovieLocalAddBtn').addEventListener('click', (e) => {
    addMovieToLocalStorage(movie);
  });
  // iMovieLocalRemoveBtn
  document.querySelector('#iMovieLocalRemoveBtn').addEventListener('click', (e) => {
    removeMovieToLocalStorage(movie);
  });

   
};


