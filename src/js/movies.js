const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y'
    }
};


const moviesList = document.querySelector('.movies__list-items');


await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(movie => {

          const genres = []
            const li = document.createElement('li');
            li.className = 'movies__list-item';
            li.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))';
            li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;
            li.style.backgroundSize = 'cover';
            li.style.backgroundRepeat = 'no-repeat';
            li.style.width = '395px';
            li.style.height = '574px';
            li.style.overflow = 'hidden';
            li.style.borderRadius = '5px';
            li.style.color = 'white';
            li.style.position = 'relative';
            li.style.cursor = 'pointer';
            
            
            li.innerHTML = `
                <div class="movies__list-item-info">
                    <div class="movies__list-item-info-container">
                    <h3 class="movies__list-item-title">${movie.title || movie.name}</h3>
                    <p class="movies__list-item-description">${movie.release_date}</p>
                    </div>
                    <div class="movies__list-item-rating">
                     ${Array.from({length: 5}, (_, index) => 
                        index < Math.round(movie.vote_average) 
                            ? '<img src="./images/star.png" alt="star">'
                            : '<img src="./images/star-outline.png" alt="empty star">'
                     ).join('')}
                    </div>
                </div>
            `;
            
            moviesList.appendChild(li);
        });
    })
    .catch(err => console.error(err));

  

function getGenresForMovie(movie) {
  

}
