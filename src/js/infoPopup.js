// const filmContainer = document.getElementById('filmContainer');
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.closeBtn');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmFiMGI5ZGE3MTMwNzk1OGQ3NzRkMWY2MGVkNjQwNiIsIm5iZiI6MTc0MzcwNDA1MC4xMTAwMDAxLCJzdWIiOiI2N2VlY2ZmMmVkZThkODJmM2JhY2UyMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MsNAvT282kqW1uTLeqhXSOcrkeJp-amWyjv3dEkdzE8',
  },
};

fetch(
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  options
)
  .then(res => res.json())
  .then(data => {
    const movie = data.results[0];
    console.log('Movie ID:', movie.id);
    console.log('Movie Title:', movie.title);
    getMovieDetails(movie.id);
  })
  .catch(err => console.error('Error fetching popular movies:', err));

function getMovieDetails(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then(res => res.json())
    .then(data => console.log('Movie Details:', data))
    .catch(err => console.error('Error fetching movie details:', err));
}

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmFiMGI5ZGE3MTMwNzk1OGQ3NzRkMWY2MGVkNjQwNiIsIm5iZiI6MTc0MzcwNDA1MC4xMTAwMDAxLCJzdWIiOiI2N2VlY2ZmMmVkZThkODJmM2JhY2UyMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MsNAvT282kqW1uTLeqhXSOcrkeJp-amWyjv3dEkdzE8',
//   },
// };

// fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

async function fetchFilms() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=6'
    );
    const data = await response.json();

    data.forEach(film => {
      const filmDiv = document.createElement('div');
      filmDiv.classList.add('film');
      filmDiv.dataset.title = film.title;
      filmDiv.dataset.description = film.body;
      filmDiv.textContent = film.title.substring(0, 20) + '...';

      filmDiv.addEventListener('click', () => {
        modalTitle.textContent = film.title;
        modalDescription.textContent = film.body;
        modal.style.display = 'block';
      });

      filmContainer.appendChild(filmDiv);
    });
  } catch (error) {
    console.error('Film verileri alınamadı', error);
  }
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

fetchFilms();
