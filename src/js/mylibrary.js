// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzZkMTZjOWU1MTMyNTlkYThmY2Y2MzAwZjFmZWI3OCIsIm5iZiI6MTc0MzcwNjgxNi42NTEsInN1YiI6IjY3ZWVkYWMwYjNlMDM1Mjg2Y2Q5MGQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhiQgrAi8xURVIwPyhgnrhq88KOZAEHcX1G8OwLmwQM'
//     }
// };

// fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));


// function filmiSil(index) {
//     const filmVerisi = localStorage.getItem("filmler");
//     if (!filmVerisi) return;

//     const filmler = JSON.parse(filmVerisi);
//     filmler.splice(index, 1); // Seçilen filmi sil
//     localStorage.setItem("filmler", JSON.stringify(filmler));

//     showMovies(); // Listeyi güncelle
// }
document.addEventListener('DOMContentLoaded', function () {

    const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

    // mylibrary.html sayfasındaki elementler
    const genres = document.getElementById('filters');
    const movieList = document.getElementById('movie-grid');
    const loadMoreBtn = document.getElementById('.load-more-btn');

    const pageSize = 9; // Her seferinde gösterilecek film sayısı
    let currentPage = 1; // Başlangıç sayfası

    // library html sayfası (film yoksa görünecek sayfa)
    const emptyLibrary = document.getElementById('empty-library');
    const searchMovieBtn = document.getElementById('go-to-catalog-btn');


    if (myLibrary.length === 0) {
        // Film yoksa, sadece varsayılan ekranı göster
        emptyLibrary.style.display = 'block';
        genres.style.display = 'none';
        movieList.style.display = 'none';
        loadMoreBtn.style.display = 'none';
        searchMovieBtn.style.display = 'block'; // "Go to Catalog" butonunu göster
        searchMovieBtn.addEventListener('click', function () {
            window.location.href = 'index.html'; // Katalog sayfasına yönlendir
        });
        return;
    }
    // Film varsa, varsayılan ekranı gizle ve dropdown/load more'u göster
    emptyLibrary.style.display = 'none';
    movieList.style.display = 'block';
    renderLibrary(myLibrary.slice(0, pageSize));
    if (myLibrary.length > pageSize) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
    // Dropdown menüsünü oluştur
    const uniqueGenres = [...new Set(myLibrary.flatMap(movie => movie.genres))];
    uniqueGenres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genres.appendChild(option);
    });
    // Dropdown menüsüne tıklama olayı ekle
    genres.addEventListener('change', function () {
        const selectedGenre = this.value;
        const filteredMovies = myLibrary.filter(movie => movie.genres.includes(selectedGenre));
        renderLibrary(filteredMovies);
    });

    // // Load more butonuna tıklandığında
    // loadMoreBtn.addEventListener('click', function () {
    //     currentPage++;
    //     renderLibrary(myLibrary.slice(0, pageSize * currentPage));

    //     // Eğer daha fazla film yoksa butonu gizle
    //     if (myLibrary.length <= pageSize * currentPage) {
    //         loadMoreBtn.style.display = 'none';
    //     }
    // });
    // Load more butonuna tıklama olayı ekle
    loadMoreBtn.addEventListener('click', function () {
        currentPage++;
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const moviesToShow = myLibrary.slice(start, end);
        renderLibrary(moviesToShow);

        // Eğer daha fazla film yoksa butonu gizle
        if (end >= myLibrary.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
    // Film silme butonuna tıklama olayı ekle
    movieList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.dataset.index;
            myLibrary.splice(index, 1); // Seçilen filmi sil
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
            renderLibrary(myLibrary.slice(0, pageSize)); // Listeyi güncelle
        }
    });

}
);
function renderLibrary(movies) {
    const movieList = document.getElementById('movie-grid');
    movieList.innerHTML = ''; // Önceki filmleri temizle

    movies.forEach((movie, index) => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${getGenreNames(movie.genres)}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        movieList.appendChild(movieItem);
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
        37: 'Western',
    };
    if (!genreIds || !Array.isArray(genreIds)) return '';
    const mappedGenres = genreIds.map(id => genreMap[id] || 'Unknown');
    return mappedGenres.slice(0, 2).join(', '); // Maksimum 2 genre döndür
}