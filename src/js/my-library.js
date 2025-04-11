// edited by @yesimbozkurt
 import { renderMovieInfoPopup } from './infoPopup.js';
 import { showLoader, hideLoader, fetchWithLoader } from './loader.js';

document.addEventListener('DOMContentLoaded', function () {
    showLoader();

    // { "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg", "id": 950387, "title": "A Minecraft Movie", "original_title": "A Minecraft Movie", "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.", "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg", "media_type": "movie", "adult": false, "original_language": "en", "genre_ids": [10751, 35, 12, 14], "popularity": 992.0749, "release_date": "2025-03-31", "video": false, "vote_average": 6.086, "vote_count": 273 }

    const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

    // mylibrary.html sayfasındaki elementler
    const genres = document.getElementById('filters');
    const movieList = document.querySelector('.library-content');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const genre = document.querySelector('#genre');

    const numberOfMovies = 9; // Her seferinde gösterilecek film sayısı
    let currentPage = 1; // Başlangıç sayfası

    // library html sayfası (film yoksa görünecek sayfa)
    const emptyLibrary = document.getElementById('empty-library');
    const searchMovieBtn = document.getElementById('go-to-catalog-btn');


    if (myLibrary.length === 0) {
        // Film yoksa, sadece varsayılan ekranı göster
        emptyLibrary.style.display = 'flex';
        genres.style.display = 'none';
        movieList.style.display = 'none';
        loadMoreBtn.style.display = 'none';
        searchMovieBtn.style.display = 'block'; // "Go to Catalog" butonunu göster
        searchMovieBtn.addEventListener('click', function () {
            window.location.href = 'index.html'; // Katalog sayfasına yönlendir
        });
        return;
    } else {
        // Film varsa, varsayılan ekranı gizle ve dropdown/load more'u göster
        emptyLibrary.style.display = 'none';
        searchMovieBtn.style.display = 'none'; // "Go to Catalog" butonunu gizle
        genres.style.display = 'flex';
        movieList.style.display = 'flex';
        loadMoreBtn.style.display = 'flex';
    }

    renderLibrary(myLibrary.slice(0, numberOfMovies)); // İlk sayfayı göster
    if (myLibrary.length > numberOfMovies) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }

    // Dropdown menüsünü oluştur
    genre.addEventListener('change', e => {
        const genreId = e.target.value;
        const filteredMovies = genreId === 'all'
            ? myLibrary.slice(0, currentPage * numberOfMovies)
            : myLibrary.filter(movie => movie.genre_ids.includes(parseInt(genreId)));
        if (filteredMovies.length === 0) {
            movieList.innerHTML = ''; // Eğer filtrelenmiş film yoksa, listeyi temizle
            loadMoreBtn.style.display = 'none';
        }
        else {
            loadMoreBtn.style.display = 'block';
            renderLibrary(filteredMovies);
        }
    })

    // Load more butonuna tıklama olayı ekle
    loadMoreBtn.addEventListener('click', function () {
        currentPage++;
        const newMovies = myLibrary.slice(0, currentPage * numberOfMovies);
        renderLibrary(newMovies);

        if (newMovies.length >= myLibrary.length) {
            loadMoreBtn.style.display = 'none';
        }

    });
});

function renderLibrary(movies, append = false) {
    // Eğer append true ise, mevcut filmleri koru ve yeni filmleri ekle

    const movieList = document.querySelector(".library-content")

    if (!append) {
        movieList.innerHTML = ''; // Sadece append = false ise temizle
    }
    movieList.innerHTML = ''; // Önceki filmleri temizle

    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        li.className = 'movies__list-item';
        li.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))';
        li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`;
        li.style.backgroundSize = 'cover';
        li.style.backgroundRepeat = 'no-repeat';
        li.style.width = '395px';
        li.style.height = '574px';
        li.style.overflow = 'hidden';
        li.style.borderRadius = '5px';
        li.style.color = 'white';
        li.style.position = 'relative';
        li.style.cursor = 'pointer';
        li.addEventListener('click', e => {
            renderMovieInfoPopup(movie);
        })

        const stars = [
            `<span class="star star-outline"></span>`,
            `<span class="star star-outline"></span>`,
            `<span class="star star-outline"></span>`,
            `<span class="star star-outline"></span>`,
            `<span class="star star-outline"></span>`,
          ];
          for (let i = 0; i <= Math.round(movie.vote_average / 2); i++) {
            stars[i] = `<span class="star star"></span>`;
          }

        li.innerHTML = `
                        <div class="movies__list-item-info">
                            <div class="movies__list-item-info-container">
                            <h3 class="movies__list-item-title">${movie.title || movie.name}</h3>
                            <p class="movies__list-item-description">${movie.release_date}</p>
                            </div>
                            <div class="movies__list-item-rating">
                             ${stars.join('')}
                            </div>
                        </div>
                    `;
        movieList.appendChild(li);
    });
}

// Film türlerini isimlendiren fonksiyon
function getGenreNames(genreIds) {
    const genreMap = {
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
    if (!genreIds || !Array.isArray(genreIds)) return '';
    const mappedGenres = genreIds.map(id => genreMap[id] || 'Unknown');
    return mappedGenres.slice(0, 2).join(', '); // Maksimum 2 genre döndür
}

window.addEventListener('load', () => {
    // Loader'ı gizle
    // hideLoader fonksiyonu zaten minimum gösterim süresini dikkate alacak
    setTimeout(() => {
        hideLoader();
    }, 500); // Sayfanın tam yüklenmesinden sonra 0.5 saniye daha bekle
});

// edited by @yesimbozkurt