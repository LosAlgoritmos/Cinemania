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

    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => console.error(err));
  });
};
const getMovieVideos = async movieId => {
  return new Promise((resolve, reject) => {
    try {
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
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error('Error in getMovieVideos:', error);
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
    const heroPoster = document.querySelector(
      '#hero__content-background-image'
    );

    // random number between 0 and 19
    const randomNumber = Math.floor(Math.random() * 20);

    getDayTrends()
      .then(async res => {
        console.log('Hero Movie:', res);
        const randomMovie = res.results[randomNumber];

        // vote_average
        const voteAverage = Math.round(randomMovie.vote_average / 2);
        console.log('Vote Average:', voteAverage);
        heroPoster.src = `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`;
        heroTitle.textContent =
          randomMovie.original_name || randomMovie.original_title;
        heroInfoText.textContent = randomMovie.overview;
        for (let i = 0; i <= voteAverage; i++) {
          stars[i] = `<span class="star star"></span>`;
        }
        console.log('Stars:', stars);
        heroStars.innerHTML = stars.join('');

        console.log('Hero Movie:', randomMovie, randomMovie.id);

        getMovieVideos(randomMovie.id);
      })
      .catch(err => {
        console.error('Error fetching daily trends:', err);
      });
  } catch (error) {
    console.error('Error in heroRender:', error);
  }
};

heroRender();
