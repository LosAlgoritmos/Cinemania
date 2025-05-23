import { showLoader, hideLoader, fetchWithLoader } from './loader.js';
import { renderMovieInfoPopup } from './infoPopup.js';
const moviesList = document.querySelector('.movies__list-items');
const paginationContainer = document.querySelector('.pagination-container');

let currentPage = 1;
let totalPages = 0;

let searchQuery = '';
let searchTimeout;

const searchInput = document.querySelector('.movies__search');
const searchbtn = document.querySelector('#catalog-search-btn');
const clearSearchBtn = document.querySelector('.clear-search');




  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.trim();

    // Temizleme butonunun görünürlüğünü kontrol et
    if (searchQuery) {
      clearSearchBtn.classList.add('visible');
    } else {
      clearSearchBtn.classList.remove('visible');
    }

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      currentPage = 1;
      getMovies(currentPage);
    }, 500);
  });


  // Temizleme butonuna tıklama olayı ekle
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.remove('visible');
    currentPage = 1;
    getMovies(currentPage);
  });

  async function getMovies(page = 1) {
    showLoader();
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFlMTQ1ZTQyYzc4MDQ5YjI3Y2MwY2NhZWU1NGE3NSIsIm5iZiI6MTc0MzYzNzA0MC4yMzksInN1YiI6IjY3ZWRjYTMwMDM1NDBjZjhlNTYyODgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tuTxlFoUnsTSw7K5siU94XHqec4Jgt-IVZeRxvzIv2Y',
        },
      };

      // Arama sorgusu varsa search endpoint'ini kullan, yoksa trending endpoint'ini kullan
      const endpoint = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            searchQuery
          )}&language=en-US&page=${page}`
        : `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;

      const response = await fetch(endpoint, options);
      const data = await response.json();

      totalPages = data.total_pages;

      moviesList.innerHTML = '';

      // Sonuç yoksa mesaj göster
      if (data.results.length === 0) {
        moviesList.innerHTML = `
        <li class="no-results">
          <h2>OOPS...</h2>
          <p>We are very sorry!</p>
          <p>We don't have any results matching your search.</p>
        </li>
      `;
        paginationContainer.innerHTML = '';
        return;
      }

      // Render movies
      data.results.forEach(movie => {
        const li = document.createElement('li');
        li.className = 'movies__list-item';

        // Set up background with gradient overlay and poster image
        li.style.background =
          'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))';
        li.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.poster_path})`;

        // Note: No inline dimensions - CSS handles these now
        const stars = [
          `<span class="star star-outline"></span>`,
          `<span class="star star-outline"></span>`,
          `<span class="star star-outline"></span>`,
          `<span class="star star-outline"></span>`,
          `<span class="star star-outline"></span>`,
        ];
        for (let i = 0; i <= movie.vote_average / 2; i++) {
          stars[i] = `<span class="star star"></span>`;
        }
        li.innerHTML = `
        <div class="movies__list-item-info">
          <div class="movies__list-item-info-container">
            <h3 class="movies__list-item-title">${
              movie.title || movie.name
            }</h3>
            <p class="movies__list-item-description">${
              movie.release_date || movie.first_air_date || ''
            }</p>
          </div>
          <div class="movies__list-item-rating">
            ${stars.join('')}
          </div>
        </div>
      `;
      li.addEventListener('click', () => {
        renderMovieInfoPopup(movie);
      });

        moviesList.appendChild(li);
      });

      renderPagination();
    } catch (err) {
      console.error('Error fetching movies:', err);
      moviesList.innerHTML =
        '<li class="error-message">Filmler yüklenirken bir hata oluştu.</li>';
    } finally {
      hideLoader();
    }
  }

  function renderPagination() {
    paginationContainer.innerHTML = '';
    const paginationWrapper = document.createElement('div');
    paginationWrapper.className = 'pagination-wrapper';

    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<';
    prevButton.className = 'pagination-button prev';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        getMovies(currentPage);
      }
    });

    const pageButtons = document.createElement('div');
    pageButtons.className = 'pagination-pages';

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - 2);
    }

    if (startPage > 1) {
      const firstPageBtn = createPageButton(1);
      pageButtons.appendChild(firstPageBtn);

      if (startPage > 2) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'pagination-ellipsis';
        pageButtons.appendChild(ellipsis);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = createPageButton(i);
      pageButtons.appendChild(pageBtn);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'pagination-ellipsis';
        pageButtons.appendChild(ellipsis);
      }

      const lastPageBtn = createPageButton(totalPages);
      pageButtons.appendChild(lastPageBtn);
    }

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '>';
    nextButton.className = 'pagination-button next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        getMovies(currentPage);
      }
    });

    paginationWrapper.appendChild(prevButton);
    paginationWrapper.appendChild(pageButtons);
    paginationWrapper.appendChild(nextButton);
    paginationContainer.appendChild(paginationWrapper);
  }

  function createPageButton(pageNum) {
    const button = document.createElement('button');
    button.textContent = pageNum.toString().padStart(2, '0');
    button.className = 'pagination-button page';

    if (pageNum === currentPage) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      if (pageNum !== currentPage) {
        currentPage = pageNum;
        getMovies(currentPage);
      }
    });

    return button;
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!paginationContainer) {
      const paginationDiv = document.createElement('div');
      paginationDiv.className = 'pagination-container';
      document.querySelector('.movies__list').after(paginationDiv);
    }

    getMovies();
  });

 
