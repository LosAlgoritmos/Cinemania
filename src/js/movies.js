import { showLoader, hideLoader, fetchWithLoader } from './loader.js';

const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetchWithLoader fonksiyonunu kullanarak veri çekiyoruz
async function getMovies() {
  try {
    const data = await fetchWithLoader(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', 
      options
    );
    console.log(data);
    // Burada verilerin işlenmesi ve ekrana yansıtılması
    return data;
  } catch (err) {
    console.error(err);
  }
}

// Sayfanın yüklenmesi durumunda çalıştırılacak
document.addEventListener('DOMContentLoaded', () => {
  getMovies();
});


