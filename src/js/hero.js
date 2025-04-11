import { showLoader, hideLoader, fetchWithLoader } from './loader.js';
import { renderMovieInfoPopup } from './infoPopup.js';
const getDayTrends = async () => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k',
      },
    };

    // Loader göster
    showLoader();

    fetch(
      'https://api.themoviedb.org/3/trending/all/week?language=en-US',
      options
    )
      .then(res => res.json())
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
      .finally(() => {
        // Loader gizle
        hideLoader();
      });
  });
};
const getMovieVideos = async movieId => {
  return new Promise((resolve, reject) => {
    try {

      showLoader();
      // url: 'https://api.themoviedb.org/3/movie/movie_id/videos
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k',
        },
      };
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      )
        .then(res => res.json())
        .then(videoData => {

          resolve(videoData);

        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    } catch (error) {
      console.error('Error in getMovieVideos:', error);
    } finally {
      hideLoader();
    }
  });
};

const heroRender = async () => {
  try {
    const stars = [
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
    ];

    const heroTitle = document.querySelector('#hero__content-title');
    const heroStars = document.querySelector('#hero__content-stars');
    const heroInfoText = document.querySelector('#hero__content-info-text');
    const heroButtonArea = document.querySelector('#hero-content-button-area');
    const heroGetStartedButton = document.querySelector('#hero-get-started');
    const heroWatchTrailerButton = document.querySelector('#hero-watch-trailer');
    const heroMoreDetails = document.querySelector('#more-details');

    const heroPoster = document.querySelector(
      '#hero__content-background-image'
    );

    // random number between 0 and 19
    const randomNumber = Math.floor(Math.random() * 20);

    showLoader(); // Veri yükleme başlıyor

    getDayTrends()
      .then(async res => {
        const randomMovie = res.results[randomNumber];
        if (randomMovie) {
          heroMoreDetails.style.display = 'block';
          heroGetStartedButton.style.display = 'none';
        }
        // vote_average
        const voteAverage = Math.round(randomMovie.vote_average / 2);
        heroPoster.src = `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`;
        heroTitle.textContent = randomMovie.original_name || randomMovie.original_title || randomMovie.title;
        heroInfoText.textContent = randomMovie.overview;
        for (let i = 0; i <= voteAverage; i++) {
          stars[i] = `<span class="star star"></span>`;
        }
        heroStars.innerHTML = stars.join('');
        heroMoreDetails.addEventListener('click', () => {
          renderMovieInfoPopup(randomMovie);
        });
        heroWatchTrailerButton.addEventListener('click', () => {
          getMovieVideos(randomMovie.id).then(videoData => {
            if (videoData.results.length === 0) {
              document.querySelector('#errorModal').style.display = 'flex';
              return;
            } else {
              let vData = videoData.results.find(
                video => video.site === 'YouTube' && video.type === 'Trailer'
              );

              window.open(`https://www.youtube.com/watch?v=${vData.key}`, '_blank');
            }
          })
            .catch(err => {
              console.error('Error fetching video data:', err);
            });
        });
        // getMovieVideos(randomMovie.id);
      })
      .catch(err => {
        console.error('Error fetching daily trends:', err);
      })
      .finally(() => {
        hideLoader(); // Veri yükleme tamamlandı
      });
  } catch (error) {
    console.error('Error in heroRender:', error);
    hideLoader(); // Hata durumunda da loader'ı gizle
  }
};
heroRender();