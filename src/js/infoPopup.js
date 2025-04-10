const infoPopup = document.querySelector('.infoPopup');
const closeBtn = document.querySelector('.closeBtn');
const addLibraryBtn = document.querySelector('.addLibrary');
const paginationContainer = document.querySelector('.pagination-container');

infoPopup.style.display = 'none';
closeBtn.addEventListener('click', () => {
  infoPopup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === infoPopup) {
    infoPopup.style.display = 'none';
  }
});

function toggleLibraryButton(button) {
  if (button.textContent === ('Add to my library')) {
    button.textContent = ('Remove from my library');
  } else {
    button.textContent = ('Add to my library');
  }

};



export const renderMovieInfoPopup = (movie) => {

};





const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmFiMGI5ZGE3MTMwNzk1OGQ3NzRkMWY2MGVkNjQwNiIsIm5iZiI6MTc0MzcwNDA1MC4xMTAwMDAxLCJzdWIiOiI2N2VlY2ZmMmVkZThkODJmM2JhY2UyMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MsNAvT282kqW1uTLeqhXSOcrkeJp-amWyjv3dEkdzE8',
  },
};

async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error('Film bulunamadı!');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Hata:', error);
    return null;
  }
}

function setupFilmCards() {
  const filmCards = document.querySelectorAll('.filmCard');

  filmCards.forEach(filmCard => {
    filmCard.addEventListener('click', async () => {
      const movieId = filmCard.dataset.id;
      const movieDetails = await fetchMovieDetails(movieId);

      if (movieDetails) {
        document.getElementById('movieTitle').textContent = movieDetails.title;
        document.getElementById('aboutText').textContent =
          movieDetails.overview;
        document.getElementById('vote').textContent =
          movieDetails.vote_average.toFixed(1);
        document.getElementById('votes').textContent = movieDetails.vote_count;
        document.getElementById('popularity').textContent =
          movieDetails.popularity.toFixed(1);
        document.getElementById('genre').textContent = movieDetails.genres
          .map(g => g.name)
          .join(', ');

        const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
        document.getElementById('posterPc').src =
          posterBaseUrl + movieDetails.poster_path;
        document.getElementById('posterTablet').srcset =
          posterBaseUrl + movieDetails.poster_path;
        document.getElementById('posterMobile').srcset =
          posterBaseUrl + movieDetails.poster_path;

        infoPopup.style.display = 'flex';

        const currentAddLibraryBtn = document.querySelector('.addLibrary');
        currentAddLibraryBtn.addEventListener('click', () => {
          toggleLibraryButton(currentAddLibraryBtn);
        });
      } else {
        console.error('Film detayları alınamadı');
      }
    });
  });
}

// setupFilmCards();


