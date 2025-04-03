

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y'
    }
  };
  
  await fetch('https://api.themoviedb.org/3/movie', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));


    
    await fetch('https://api.themoviedb.org/3/find/', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

