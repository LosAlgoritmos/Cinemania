const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch(
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  options
)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
